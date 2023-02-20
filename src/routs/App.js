import logo from '../logo.svg';
import '../App.css';
import PostsList from "../components/PostsList";
import {useState} from "react";
import {Outlet} from "react-router-dom";

function App() {
    // const [modalIsVisible, setmodalIsVisible] = useState(false)
    //онклик в Модальной к-те + передаем ей результат функции через пропс

    //в MainHeader - открываем пост по клику на кнопку
    // function showModalHandler() {
    //     setmodalIsVisible(true)
    // }
    // в PostsList - передаем состояние true/false

    // function hideModalHandler() {
    //     setmodalIsVisible(false)
    // }

    return (
        <>
            <Outlet/>
            {/*<MainHeader onCreatePost={showModalHandler}/>*/}
            <main className='main'>

                <PostsList/>
                {/*// showPost={modalIsVisible}*/}
                {/*// onHidePost={hideModalHandler}/>*/}
            </main>
        </>
    );
}

export default App;


// useState + functions вынесли в App = тк нам нужна верхняя компонента которая
//имеет доступ и к MainHeader и к PostsList


{/*//идут данные в Хедер для создания поста по клику на кнопку*/
}
{/*//идут данные в Постлист для перерисовки*/
}
{/*//идут через Постлист в Модал для закрытия по клику */
}

export async function loader() {
    //get posts
    const response = await fetch("http://localhost:8080/posts")
    //extract
    const resData = await response.json();
    return resData.posts;
}

//this func will be assign to loader in index.js