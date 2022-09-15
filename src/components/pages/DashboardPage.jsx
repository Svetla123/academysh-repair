import React from "react";
import { NavigationBar, Footer, Feed } from "..";
import socialData from "../utils/data/socialData";

export default function DashboardPage() {
    return (
        <div className="app dashboard-page">
            <NavigationBar showUserDetails={true} />
            <Feed />
            <Footer social={socialData} landingPage={false} />
        </div>
    );
}
