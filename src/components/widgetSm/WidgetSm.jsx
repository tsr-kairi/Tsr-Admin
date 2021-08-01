import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://randomuser.me/api/portraits/med/men/45.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="spanwidgetSmUsername">Luiza smith</div>
            <div className="spanwidgetSmUserTitle">Software Enginer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://randomuser.me/api/portraits/med/men/44.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="spanwidgetSmUsername">Devil Elvish</div>
            <div className="spanwidgetSmUserTitle">Sofware Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://randomuser.me/api/portraits/med/men/43.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="spanwidgetSmUsername">Mack Doller</div>
            <div className="spanwidgetSmUserTitle">Sofware Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://randomuser.me/api/portraits/med/men/42.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="spanwidgetSmUsername">Pedro Dev</div>
            <div className="spanwidgetSmUserTitle">Sofware Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://randomuser.me/api/portraits/med/men/41.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="spanwidgetSmUsername">Axcy Killer</div>
            <div className="spanwidgetSmUserTitle">Sofware Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
