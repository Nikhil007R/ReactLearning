import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="appContainer">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
          <div className="content">
            <Header />
            <div className="formcontainer">
              {selectedTab === "Home" ? <PostList/> : <Form/>}
              {/* if selected tab is home then we need to show postList else if it is Create post then show form to create a new post */}
            </div>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
