const cartItems = [
  {
    seatName: "E14",
    type: "Silver",
    price: 15,
  },
];

const customerInfo = {
  name: "Amirul Islam",
  address: "58 Hoxton Park Road Liverpool, NSW 2170",
  orderId: "#5207",
};

const discount = 0;

const customerAddress = {
  heading: "Deyaler Desh at Dumaresq Campbelltown on 12th May Sunday 6 PM",
  address: `12 May, 2024 at 06:00 PM
    Dumaresq Street Cinema, NSW - Dumaresq Cinema 3
    4 Dumaresq St, Campbelltown, NSW 2560
    Coupon Used : N/A`,
};

const totalPrice = cartItems?.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
const totalPriceWithCharges = Math.round(totalPrice - discount);

// orderDate = new Date(orderDate).toLocaleString();

const message = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  </head>
  </div>

  <body style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;background-color:#ffffff">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:100%;margin:0 auto;padding:20px 0 48px;width:660px">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column"><img class="adapt-img" src="https://www.bongozfilms.com/frontend/images/logo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="186">
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="10" cellSpacing="" role="presentation">
              <tbody>
                <tr>
                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">

                          <tr>
                           </td>
                          <td align="left" data-id="__react-email-column" style="display:table-cell ">
                            <button style="padding: 1rem 3rem; border: none; background-color: #fff; font-size: 1.7rem; font-weight: 700; margin-top: 3rem; padding-left: 0" >Invoice</button>

                            <p style="font-size:14px; font-weight: 500;line-height:1.4;margin:0;padding:0color:rgb(102,102,102); width: 200px; color:rgb(102,102,102);">Order ID      10 May, 2024${
                              customerInfo?.orderId
                            }</p>
                          </td>
                          <td align="right" colSpan="2" data-id="__react-email-column" style="border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                          <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:15px;color:#333333;font-size:14px; font-weight: bold; padding-right: 10px; padding-bottom: 7px" >Invoice To:</p>
                          <p style="font-size:16px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102) padding-top: 60px;">${
                            customerInfo?.name
                          }</p>
                          <p style="font-size:16px;line-height:1.4;margin:0;padding:0color:rgb(102,102,102); width: 200px;">${
                            customerInfo?.address
                          }</p>
                        </td>
                </tr>
                          <tr >
                           <td align="right" style="padding:0;Margin:0">
                             
                        </td>
                </tr>
                <tr>
                <tr style="width:100%">
                                        <td align="" colspan='2' style="width: 100%" data-id="__react-email-column" style="border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                          <p style="font-size:16px;line-height:1.4;margin:0;padding:.2rem 0; font-weight: 700; padding-top: 1.5rem;">${
                                            customerAddress.heading
                                          }</p>
                                          <p style="font-size:13px;line-height:1.4;margin:0;padding:.2rem 0;color:rgb(102,102,102); font-weight: 400; max-width: 300px; padding-top: 0.5rem;">${
                                            customerAddress.address
                                          }</p>
                                        </td>
                </tr>
              </tr>
              </tbody>
            </table>
            
            <p style=" font-size: 5px; opacity: 0; visibility: hidden;">space</p>
           
            <table align="right" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="10" cellSpacing="0" role="presentation">
                        <thead style="border-collapse:collapse;border-spacing:1rem;color:rgb(51,51,51);background-color:rgb(250,250,250);font-size:12px; padding: 0 .5rem;">
                            <tr style="background-color: #F5D930;">
                                <th align="left">
                                  <p style="font-size:14px;line-height:24px;margin:0;font-weight:900">Name</p>
                                </th>
                                <th >
                                  <p style="font-size:14px;line-height:24px;margin:0;font-weight:900">Color</p>
                                </th>
                                <th >
                                  <p style="font-size:14px;line-height:24px;margin:0;font-weight:900">Size</p>
                                </th>
                                <th >
                                  <p style="font-size:14px;line-height:24px;margin:0;font-weight:900">Quantity</p>
                                </th>
                                <th >
                                  <p style="font-size:14px;line-height:24px;margin:0;font-weight:900">Unit price</p>
                                </th>
                                <th >
                                  <p style="font-size:14px;line-height:24px;margin:0;font-weight:900">Total Price</p>
                                </th>
                              </tr>
                        </thead>
                      <tbody style="width:100%">
                      ${cartItems?.map(
                        (paymentInfo) =>
                          `<tr style="width:100%; border-bottom: 1px solid black">
                            
                          <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                            <p style="font-size:10px;line-height:1rem;margin:0;color:rgb(102,102,102);font-weight:600; max-width: 100px;">${paymentInfo.seatName}</p>
                          </td>
                          
                          <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                            <p style="font-size:10px;line-height:24px;margin:0;color:rgb(102,102,102);font-weight:600; text-align: center;">${paymentInfo?.type}</p>
                          </td>
                          <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                            <p style="font-size:16px;line-height:24px;margin:0;color:rgb(102,102,102);font-weight:600; text-align: center;">${paymentInfo.price}</p>
                          </td>
                          <td align="right" data-id="__react-email-column" style="display:table-cell;width:90px">
                            <p style="font-size:16px;line-height:24px;margin:0px 20px 0px 0px;font-weight:600;white-space:nowrap; text-align: center;">$${totalPriceWithCharges}</p>
                          </td>
                        </tr>`
                      )}

                        
                        
                      </tbody>
                      
                    </table>
                  </td>
                  
                </tr>
              </tbody>
            </table>
      
            
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <p><span>Subtotal</span> $${totalPriceWithCharges}</p>
                    <p><span>Discount</span> $${discount}</p>
                    <p><span>Discount</span> $${discount}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:12px;line-height:24px;margin:8px 0 0 0;text-align:center;color:rgb(102,102,102)">
            <p style="font-size:12px;line-height:24px;margin:25px 0 0 0;text-align:center;color:rgb(102,102,102)">Copyright © 2023 CheB Inc. <br /> All rights reserved</p>
      
      
      
            
          </td>
        </tr>
      
        
      </tbody>
      </table>

    <script src="./main.js"></script>
  </body>

</html>`;

const root = document.getElementById("root");

root.innerHTML = message;

console.log(message);
