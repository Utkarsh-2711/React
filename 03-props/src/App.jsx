import React from "react";
import Card from "./components/Card";

const App = () => {
    return (
        <>
            <Card
                user="Utkarsh"
                age={21}
                img="https://images.unsplash.com/photo-1742980823491-025c435ba40f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJtdyUyMGxvZ298ZW58MHx8MHx8fDA%3D"
            />
            <Card
                user="Nikunj"
                age={26}
                img="https://images.unsplash.com/photo-1661333587640-4f5461bf7726?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </>
    );
};

export default App;
