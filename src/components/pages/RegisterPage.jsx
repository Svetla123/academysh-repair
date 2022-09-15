import React from "react";
import { NavigationBar, Footer, RegisterForm } from "..";
import socialData from "../utils/data/socialData";

export default function RegsiterPage() {
    return (
        <div className="login--page">
            <NavigationBar showUserDetails={false} />
            <RegisterForm />
            <Footer social={socialData} landingPage={false} />
        </div>
    );
}
