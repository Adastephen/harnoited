import React from "react";
import { Header } from "../../index";

function Home () {
    return (
    <>
        <header />

        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </>
)
}
export default Home;