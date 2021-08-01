import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transection</h3>
      <table className="widgetLgtable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/med/men/13.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rikro Carol</span>
          </td>
          <td className="widgetLgDate">27 Jul 2021</td>
          <td className="widgetLgAmount">$152.07</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/med/men/12.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ethan Simsa</span>
          </td>
          <td className="widgetLgDate">26 Jul 2021</td>
          <td className="widgetLgAmount">$540.40</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>{" "}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/med/men/11.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Marco Denis</span>
          </td>
          <td className="widgetLgDate">25 Jul 2021</td>
          <td className="widgetLgAmount">$682.08</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>{" "}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://randomuser.me/api/portraits/med/men/10.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chiyo Rivel</span>
          </td>
          <td className="widgetLgDate">24 Jul 2021</td>
          <td className="widgetLgAmount">$192.06</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>{" "}
      </table>
    </div>
  );
}
