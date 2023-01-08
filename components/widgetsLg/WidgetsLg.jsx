import React from "react";
import "./widgetsLg.css";

export default function widgetsLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671834551/Dashboard/peinados-para-caras-cuadradas6_eivhpk.jpg"
              className="widgetLgImg"
              alt="User 1"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671834551/Dashboard/peinados-para-caras-cuadradas6_eivhpk.jpg"
              className="widgetLgImg"
              alt="User 1"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671834551/Dashboard/peinados-para-caras-cuadradas6_eivhpk.jpg"
              className="widgetLgImg"
              alt="User 1"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671834551/Dashboard/peinados-para-caras-cuadradas6_eivhpk.jpg"
              className="widgetLgImg"
              alt="User 1"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
