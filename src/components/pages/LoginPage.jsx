import React from "react";
import { NavigationBar, FooterMain, LoginForm } from "..";
import socialData from "../../data/socialData";
export default function LoginPage() {
    return (
        <div className="login--page">
            <NavigationBar />
            <LoginForm />
            <FooterMain social={socialData} />
        </div>
    );
}
