const cartItems = [
  {
    seatName: "E14",
    type: "Silver",
    price: 15,
  },
  {
    seatName: "E15",
    type: "Silver",
    price: 15,
  },
  {
    seatName: "E15",
    type: "Silver",
    price: 15,
  },
];

const orderId = "#5207";
const orderDate = "10 May Sunday, 2024";
const coupon = "N/A";
const subTotal = "30";

const name = "Amirul Islam";
const phone = "+8801761515810";

const discount = 0;

const total = cartItems?.reduce((sum, item) => {
  return sum + item.price;
}, 0);

// console.log(totalPrice);
const totalPriceWithCharges = Math.round(total - discount);

const ticketItems = [
  {
    seatName: "E14",
    status: "Silver",
    price: 15,
  },
  {
    seatName: "E15",
    status: "Silver",
    price: 15,
  },
  {
    seatName: "E15",
    status: "Silver",
    price: 15,
  },
];

const showsDetails = {
  hall: {
    name: "Cinema 7",
  },
  theater: {
    name: "Dadi Cinema",
  },
  event: {
    name: "Toofan",
  },
  city: {
    name: "BlackTown",
  },
  state: {
    name: "Nsw",
  },
  country: {
    name: "Australia",
  },
  startTime: "06:00 PM",
  date: "12 May Sunday, 2024",
  OrderDate: {
    order: {
      createAt: "create At",
    },
  },
};

// orderDate = new Date(orderDate).toLocaleString();

const message = `
  <!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

<head>
  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">

  <style>
    * {
      font-family: "Poppins", sans-serif;
    }

    .logo {
      display: block;
      border: 0;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      width: 150px;
    }

    .invoiceTitle {

      padding: 0.2rem 3rem;
      border: none;
      background-color: #fff;
      font-size: 2.7rem;
      font-weight: 700;
      margin-top: 3rem;
      padding-left: 0;
      white-space: nowrap;
      text-transform: uppercase
    }

    .invoice_to {
    Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:15px;color:#333333;font-size:17px; font-weight: bold; padding-bottom: 7px;}

    .footer_p {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
    }

    .border_bottom {
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
    }

    .customerName,
    .phone {
      font-size: 16px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      color: rgb(102, 102, 102) padding-top: 60px;
    }

    .customerName {
      font-size: 16px;
      line-height: 1.4;
      margin: 0;
      padding: 0color:rgb(102, 102, 102);
      width: 200px;
    }

    thead {
      border-collapse: collapse;
      border-spacing: 1rem;
      color: rgb(51, 51, 51);
      background-color: rgb(250, 250, 250);
      font-size: 12px;
      padding: 0 .5rem;
    }

    .payment_info {
      font-size: 16px;
      line-height: 1rem;
      margin: 0;
      color: rgb(102, 102, 102);
      font-weight: 600;
    }

    .th_name {
      font-size: 14px;
      line-height: 24px;
      margin: 0;
      font-weight: 900
    }

    .order_id {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      color: rgb(102, 102, 102);
      max-width: 400px;
      color: rgb(102, 102, 102);
    }
  </style>
</head>
</div>

<body style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;background-color:#ffffff">
  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation"
    style="max-width:100%;margin:0 auto;padding:20px 0 48px;width:660px">
    <tbody>
      <tr style="width:100%">
        <td colSpan="2">
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
            <tbody>
              <tr>
                <td>
                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                    <tbody style="width:100%">
                      <tr style="width:100%">
                        <td data-id="__react-email-column"><img
                            src="https://bongozfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBrand.1eb1745a.jpg&w=3840&q=75"
                            alt="logo width=" 70" style="width: 110px" class="logo" />
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <table align="center" width="100%" border="0" cellPadding="10" cellSpacing="" role="presentation">
            <tbody style'padding'>
              <tr>
                <td align="left" data-id="__react-email-column" style="display:table-cell ">
                  <button style="" class="invoiceTitle">This is your ticket</button>

                  <p class="order_id">Order ID ${orderId} &nbsp; &nbsp; &nbsp; ${orderDate}</p>
                </td>
                <td align="right" colSpan="2" data-id="__react-email-column"
                  style="border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                  <table style="width: 100%; padding-top: 15px">
                    <tr>
                      <td align="right">
                        <p
                          style="" class='invoice_to' >
                          Invoice To:</p>
                      </td>
                    </tr>
                    <tr>
                      <td align="right">
                        <p class="customerName">${name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td align="right">
                        <p class="phone">${phone}</p>
                      </td>
                    </tr>
                  </table>



                </td>

              </tr>
              <tr style="width:100%">
                <td align="" colSpan='2' style="width: 100%" data-id="__react-email-column"
                  style="border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                  <div style="width: 75%">
                  <p
                    style="font-size:20px;line-height:1.4;margin:0;padding:.2rem 0; font-weight: 700; padding-top: 1.5rem;">
                    ${showsDetails?.event?.name}
                  </p>
                  <p
                    style="font-size:16px;line-height:1.4;margin:0;padding:.2rem 0; font-weight: 400; padding-top: 0.5rem;"> ${
                      showsDetails?.date
                    } at ${showsDetails?.startTime}   
                  </p>

                  <p
                    style="font-size:16px;line-height:1.4;margin:0;padding:.2rem 0; font-weight: 400; padding-top: 0.5rem;"> ${
                      showsDetails?.theater?.name
                    }, ${showsDetails?.hall?.name} </p>
                  <p
                    style="font-size:16px;line-height:1.4;margin:0;padding:.2rem 0; font-weight: 400; padding-top: 0.5rem;"> ${
                      showsDetails?.state?.name
                    }, ${showsDetails?.city?.name}, ${
  showsDetails?.country?.name
} </p>

</div>


                </td>
              </tr>
            </tbody>
          </table>
          <table align="center" width="100%" border="0" cellPadding="10" cellSpacing="0" role="presentation">
            <thead style="">
              <tr style="background-color: #F5D930;">
                <th align="left">
                  <p class='th_name'>Seat No.</p>
                </th>
                <th>
                  <p class='th_name'>Type</p>
                </th>
                <th>
                  <p style="text-align: right" class='th_name'>Price</p>
                </th>
              </tr>
            </thead>
            <tbody style="width:100%">
              ${ticketItems
                ?.map(
                  (paymentInfo) =>
                    `
              <tr style="width:100%; border-bottom: 1px solid black">

                <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                  <p class="payment_info">${paymentInfo.seatName}</p>
                </td>

                <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                  <p style="text-align: center;" class="payment_info">${paymentInfo?.status}</p>
                </td>
                <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                  <p style="text-align: right;" class="payment_info">$${paymentInfo.price}</p>
                </td>
              </tr>
              <tr style="width:100%; border-bottom: 1px solid black">
                <td colSpan="3" data-id="__react-email-column" style="position: relative;">
                  <p style="border-bottom: 1px solid #999999" class="border_bottom"></p>
                </td>
              </tr>
              `
                )
                .join("")}



            </tbody>

          </table>
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
            <tbody>
              <tr>
                <td colSpan="2">
                  <table style="width: 100%">

                    <tbody>
                      <tr>
                        <td align="left" style='font-weight: 600; text-align: right; padding-right: 80px'>
                          Subtotal
                        </td>
                        <td align="right">
                          $${subTotal}
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style='font-weight: 600; text-align: right; padding-right: 80px'>
                          Coupon Used:
                        </td>
                        <td align="right">
                          ${coupon}
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style='font-weight: 600; text-align: right; padding-right: 80px'>
                          Discount
                        </td>
                        <td align="right">
                          $${discount}
                        </td>

                      </tr>
                      <tr>
                        <td align="left">
                          <p style='font-weight: 700; font-size: 1.4rem; text-align: right; padding-right: 80px'>
                            Grand Total
                          </p>
                        </td>
                        <td align="right">
                          <p style='font-weight: 700; font-size: 1.4rem;'>
                            $${total}
                          </p>
                        </td>

                      </tr>
                    </tbody>


                  </table>

                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <p style="padding-bottom: 50px; border-bottom: 2px solid #999999;">Show this at the venue for entry.</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <img src="https://i.ibb.co/2Nyvhq5/banner.jpg" width="100%" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <div style=' width: 50%;'>
                    <p class="footer_p"> THANK YOU!</p>
                    <p class="footer_p"> BongOz Films Team</p>
                    <p class="footer_p"> Email: <a href="mailto:info@bongozfilms.com">info@bongozfilms.com</a></p>
                    <p class="footer_p"> Mobile: +61 406 063 058</p>
                  </div>
                </td>

              </tr>

              <tr>
                <td colSpan="2">
                  <footer style="text-align: center; white-space: nowrap">
          Copyright @ 2024 BongOz Films | All Rights Reserved | <a href="https://bongozfilms.com/terms-conditions"> Terms and Conditions <a> | <a href="https://bongozfilms.com/terms-conditions"> Privacy Policy <a>
    </footer>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>


    </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>




</body>

</html>
`;

const root = document.getElementById("root");

root.innerHTML = message;

console.log(message);
