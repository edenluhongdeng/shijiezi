import React, { useState, useEffect, useCallback, useContext, useRef } from "react"
import "./Todos.css"
const MyContext = React.createContext(null);

const HeaderTodo = () => {
    const { todoAdd } = useContext(MyContext);
    const dateRef = useRef()
    return (
        <header>
            todos
            
            <form onSubmit={(e) => {
                e.preventDefault()
                if (dateRef.current.value.trim().length) {
                    todoAdd(dateRef.current.value.trim())
                    dateRef.current.value = ""
                } else {
                    return false;
                }
            }}>
                <input
                    ref={dateRef}
                    type="text"
                    placeholder="输入todos"
                />
            </form>
        </header>
    )
}
const ItemTodo = (props) => {
    const { item } = props;
    const { todoTarget, todoDetele } = useContext(MyContext);
    return (
        <li key={item.id}>
            <input type="checkbox" onChange={() => todoTarget(item.id)} />
            <span className={item.target ? "target" : ""}> {item.lebal}</span>
            <label onClick={() => todoDetele(item.id)}>&#215;</label>
        </li>
    )
}
const ArticleTodo = () => {
    const { todos } = useContext(MyContext);
    return (
        <ul>
            {
                todos.map((item) => {
                    return (
                        <ItemTodo key={item.id} item={item} />
                    )
                })
            }
        </ul>
    )
}
const _$ToDos = "_$ToDos"
function Todos() {
    const [todos, setTodos] = useState([]);

    const todoAdd = useCallback((value) => {
        const ids = Math.random()
        const newTodos = { id: ids, lebal: value, target: false }
        setTodos(()=>[...todos, newTodos])
    })
    const todoDetele = useCallback((id) => {
        setTodos(()=>todos.filter(i => i.id !== id))
    })
    const todoTarget = useCallback((id) => {
        const newList = todos.map(i => {
            if (i.id === id) {
                i.target = !i.target
            }
            return i;
        })
        setTodos(()=>newList)
    })
    function useWinSize() {
        const winHeight = document.documentElement.clientHeight;
        const winWidth = document.documentElement.clientWidth;

        const [size, setSize] = useState({ height: winHeight, width: winWidth });
        const onResize = () => {
            setSize({ width: winHeight, height: winWidth });
        }
        useEffect(() => {
            window.addEventListener("resize", onResize, false);
            return () => {
                window.removeEventListener("resize", onResize);
            };
        });
        return size;
    }
    const size = useWinSize();
    useEffect(() => {
        setTodos(JSON.parse(window.localStorage.getItem(_$ToDos)) || [])
    },[])
    useEffect(() => {
        window.localStorage.setItem(_$ToDos, JSON.stringify(todos))
    }, [todos])
    console.log(todos);
    
    return (
        <MyContext.Provider
            value={{ todoAdd, todos, todoTarget, todoDetele }}>
            <div className="todos_list">
                {size.height} X {size.width}
                <HeaderTodo />
                <ArticleTodo />
            </div>
        </MyContext.Provider>
    )
}

export default Todos;