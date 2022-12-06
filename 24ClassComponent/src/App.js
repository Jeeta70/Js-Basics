import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import New from "./components/New";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <New
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <New
                  key="business"
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <New
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <New
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <New key="health" pageSize={5} country="in" category="health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <New
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <New key="sports" pageSize={5} country="in" category="sports" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <New
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
