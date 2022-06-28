import './App.css';
import { useState, useEffect, } from 'react';
import { useNavigate, } from 'react-router-dom'
import { MainWindow } from './components/MaineWindow/MainWindow';
import { LogIn } from './components/LogIn/LogIn';
import { SignUp } from './components/SignUp/SignUp';


export function App() {
  const [listItem, setListItem] = useState([]);
  const [item, setItem] = useState({});
  const [basketListItems, setBasketItems] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isLogInOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([]);
  const [logInInputs, setLogInInputs] = useState({});
  const [userIsExist, setUserIsExist] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const logInInputsFun = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLogInInputs({ ...logInInputs, [name]: value })
  }

  const createUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  const createUserList = () => {
    setUsers([...users, user])
  }

  const userData = (event) => {
    event.preventDefault();
    navigate('/');
    toggleIsSignUpOpen();

    if (event.target.innerText === 'SIGN OUT') {
      users.map((elem, index) => {
        if (elem.username === logInInputs.username && elem.password === logInInputs.password) {
          setUsers((users) => {
            users.splice(index, 1)
            setIsLogin(false)
            return users;
          })
        }
      })

      return;
    }

    createUserList()
  }

  const userValidator = (event) => {
    event.preventDefault();
    users.some((item) => {
      if (item.username === logInInputs.username && item.password === logInInputs.password) {
        setUserIsExist(true);
        toggleIsLoginOpen();
        setIsLogin(true);

        return;
      }

      setUserIsExist(false)
    })
  }

  const reTurnItem = (item) => {
    setItem(item)
  };

  const returnBasketListItems = (item, counter = 0) => {
    let tempArr = [];

    do {
      tempArr.push(item)
      counter--;
    } while (counter > 0)

    setBasketItems([...basketListItems, ...tempArr])
  }

  const increaseCounter = () => {
    setCounter((counter) => {
      return counter + 1;
    })
  }

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((counter) => {
        return counter - 1;
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
        .then(res => res.json());

      setListItem(result)
    };

    fetchData();
  }, [])

  const toggleIsLoginOpen = () => {
    setIsLoginOpen((isLogInOpen) => {
      setUserIsExist(true)
      return !isLogInOpen;
    })
  }

  const toggleIsSignUpOpen = () => {
    setIsSignUpOpen((isSignUpOpen) => {
      return !isSignUpOpen;
    })
  }


  return (
    <>
      <MainWindow listItem={listItem}
        reTurnItem={reTurnItem}
        currentItem={item}
        returnBasketListItems={returnBasketListItems}
        currentBasketListItems={basketListItems}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
        counter={counter}
        toggleIsLoginOpen={toggleIsLoginOpen}
        toggleIsSignUpOpen={toggleIsSignUpOpen}
        isLogin={isLogin}
      />
      {isLogInOpen &&
        <LogIn toggleIsLoginOpen={toggleIsLoginOpen}
          userValidator={userValidator}
          logInInputsFun={logInInputsFun}
          logInInputs={logInInputs}
          userIsExist={userIsExist}
        />
      }
      {isSignUpOpen &&
        <SignUp toggleIsSignUpOpen={toggleIsSignUpOpen}
          userData={userData}
          createUser={createUser}
          user={user}
          isLogin={isLogin}
        />
      }

    </>
  );
}
