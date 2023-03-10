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
            <span className="widgetLgName">Susana Álvarez</span>
          </td>
          <td className="widgetLgDate">10/01/2023</td>
          <td className="widgetLgAmount">122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671988547/Dashboard/4._CWBTJ7EEAJFPBLBZG7DJP24LUI_diwe2r.jpg"
              className="widgetLgImg"
              alt="User 2"
            />
            <span className="widgetLgName">Jorge Ceballos</span>
          </td>
          <td className="widgetLgDate">09/01/2023</td>
          <td className="widgetLgAmount">240.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671988547/Dashboard/7._Persona-1-445x445_sxgudu.jpg"
              className="widgetLgImg"
              alt="User 3"
            />
            <span className="widgetLgName">Mario González</span>
          </td>
          <td className="widgetLgDate">10/01/2023</td>
          <td className="widgetLgAmount">45.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
