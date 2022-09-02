import React from "react";
import { NavigationBar, FooterMain, RegisterForm } from "..";
import socialData from "../../data/socialData";

export default function RegsiterPage() {
    return (
        <div className="login--page">
            <NavigationBar />
            <RegisterForm />
            <FooterMain social={socialData} />
        </div>
    );
}
