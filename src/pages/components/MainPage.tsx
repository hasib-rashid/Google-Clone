import React from 'react'

const MainPage = () => {
    return (
        <main className="MainPage">
            <header className="main_header">
                <div className="main_header_comp">
                    <p>Gmail</p>
                </div>

                <div className="main_header_comp">
                    <p>Images</p>
                </div>

                <div className="main_header_comp">
                    <img className="menu-icon" src="https://img.icons8.com/ios-glyphs/85/000000/squared-menu.png" alt="Menu" />
                </div>

                <div className="main_header_comp">
                    <img className="user-icon" src="https://img.icons8.com/ios-filled/85/000000/user-male-circle.png" alt="User" />
                </div>
            </header>

            <main className="main-google-comp">
                <img className="google-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
            </main>
        </main>
    )
}

export default MainPage
