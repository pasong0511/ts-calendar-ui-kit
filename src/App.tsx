import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
    return (
        <div className="App">
            <Calendar useHoliday={true} />
        </div>
    );
}

export default App;
