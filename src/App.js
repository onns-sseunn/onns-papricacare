import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'; 

function App(){
  return (
    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>  
)
}