import { Route, Routes } from "react-router-dom";
import AddEditBlog from "./pages/AddEditBlog";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"

function App() {
  return (
    
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Header />
      <Routes>
        
          
          <Route path="/" element={Home}/>  
          <Route path="/addBlog" element={AddEditBlog}/> 
          <Route path="/editBlog/:id" element={AddEditBlog}/> 
          <Route path="/blog/:id" element={Blog}/>
          <Route path="/about" element={About}/>          
          <Route path="*" element={NotFound}/> 
        
        
      </Routes>
    </div>
  );
}

export default App; 
