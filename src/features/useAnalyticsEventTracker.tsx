import ReactGA from "react-ga";

const UseAnalyticsEventTracker = (category = "Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
        ReactGA.event({ category, action, label });
    }
    return eventTracker;
}
export default UseAnalyticsEventTracker;