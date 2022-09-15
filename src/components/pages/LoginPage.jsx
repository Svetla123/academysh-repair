import React from "react";
import { NavigationBar, Footer, LoginForm } from "..";
import socialData from "../utils/data/socialData";
export default function LoginPage() {
    return (
        <div className="login--page">
            <NavigationBar showUserDetails={false} />
            <LoginForm />
            <Footer social={socialData} landingPage={false} />
        </div>
    );
}
