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

const customerInfo = {
  name: "Amirul Islam",
  address: "58 Hoxton Park Road Liverpool, NSW 2170",
  orderId: "#5207",
};

const discount = 0;

const customerAddress = {
  heading: "Deyaler Desh at Dumaresq Campbelltown on 12th May Sunday 6 PM",
  address: '12 May, 2024 at 06:00 PM Dumaresq Street Cinema, NSW - Dumaresq Cinema 3 4 Dumaresq St, Campbelltown, NSW 2560 Coupon Used : N/A',
};

const totalPrice = cartItems?.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(totalPrice)
const totalPriceWithCharges = Math.round(totalPrice - discount);

// orderDate = new Date(orderDate).toLocaleString();

const message = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<style>
  *{
    font-family: "Poppins", sans-serif;
  }
  .logo{
    display:block;
    border:0;
    outline:none;
    text-decoration:none;
    -ms-interpolation-mode:bicubic; 
    width: 150px;
  }
  .invoice_to{
    Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:15px;color:#333333;font-size:14px; font-weight: bold; padding-right: 10px; padding-bottom: 7px;
  }

  .footer_p{
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1;
  }
  .border_bottom{
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
  }
  .customerName{
    font-size:16px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102) padding-top: 60px;
  }
  .customerName{
    font-size:16px;line-height:1.4;margin:0;padding:0color:rgb(102,102,102); width: 200px;
  }
  .invoiceTitle{
    padding: 1rem 3rem; border: none; background-color: #fff; font-size: 1.7rem; font-weight: 700; margin-top: 3rem; padding-left: 0;
  }
  thead{
    border-collapse:collapse;border-spacing:1rem;color:rgb(51,51,51);background-color:rgb(250,250,250);font-size:12px; padding: 0 .5rem;
  }
  .payment_info{
    font-size:16px;line-height:1rem;margin:0;color:rgb(102,102,102);font-weight:600;
  }
  .th_name{
    font-size:14px;line-height:24px;margin:0;font-weight:900
  }
  .order_id{
    font-size:14px; 
    font-weight: 500;
    line-height:1.4;
    margin:0;
    padding:0color:rgb(102,102,102);
     width: 200px;
    color:rgb(102,102,102);
  }
</style>
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
                          <td data-id="__react-email-column"><img src="https://www.bongozfilms.com/frontend/images/logo.png" alt="logo width="100" class="logo" />
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
                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">

                          <tr>
                           </td>
                          <td align="left" data-id="__react-email-column" style="display:table-cell ">
                            <button style="" class="invoiceTitle" >Invoice</button>

                            <p class="order_id">Order ID 10 May, 2024${
                              customerInfo?.orderId
                            }</p>
                          </td>
                          <td align="right" colSpan="2" data-id="__react-email-column" style="border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                          <p style="invoice_to" >Invoice To:</p>
                          <p class="customerName" >${
                            customerInfo?.name
                          }</p>
                          <p className="customer_address" >${
                            customerInfo?.address
                          }</p>
                        </td>
                <tr>
                <tr style="width:100%">
                    <td align="" colSpan='2' style="width: 100%" data-id="__react-email-column" style="border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                      <p style="font-size:16px;line-height:1.4;margin:0;padding:.2rem 0; font-weight: 700; padding-top: 1.5rem;">${customerAddress.heading}</p>
                    <p style="font-size:13px;line-height:1.4;margin:0;padding:.2rem 0;color:rgb(102,102,102); font-weight: 400; max-width: 300px; padding-top: 0.5rem; padding-bottom: 1rem">${customerAddress.address}</p>
                  </td>
                </tr>
              </tr>
              </tbody>
            </table>
            
           
            <table align="center" width="100%" border="0" cellPadding="10" cellSpacing="0" role="presentation">
                        <thead style="" >
                            <tr style="background-color: #F5D930;">
                                <th align="left">
                                  <p class='th_name'>Seat No.</p>
                                </th>
                                <th  >
                                  <p class='th_name' >Type</p>
                                </th>
                                <th>
                                  <p style="text-align: right" class='th_name'>Price</p>
                                </th>
                              </tr>
                        </thead>
                      <tbody style="width:100%">
                      ${cartItems?.map(
                        (paymentInfo) =>
                          `
                        <tr style="width:100%; border-bottom: 1px solid black">
                            
                          <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                            <p class="payment_info">${paymentInfo.seatName}</p>
                          </td>
                          
                          <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                            <p style="text-align: center;" class="payment_info">${paymentInfo?.type}</p>
                          </td>
                          <td align="left" data-id="__react-email-column" style="display:table-cell; ">
                            <p style="text-align: right;" class="payment_info">${paymentInfo.price}</p>
                          </td>
                        </tr>
                        <tr style="width:100%; border-bottom: 1px solid black">
                          <td colSpan="3" data-id="__react-email-column" style="position: relative;">
                            <p style="border-bottom: 1px solid #999999" class="border_bottom"></p>
                          </td>
                        </tr>
                        `
                      ).join('')}

                        
                        
                      </tbody>
                      
                    </table>
      
            
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                  <div style='width: 50%; margin-left: auto; padding-right: 8px'>
                  <p style="display: flex; justify-content: space-between; gap: 10px"><span>Subtotal</span> $${totalPrice}</p>
                  <p style="display: flex; justify-content: space-between; gap: 10px"><span>Discount</span> $${discount}</p>
                  <p style="display: flex; justify-content: space-between; gap: 10px"><span style="font-weight: bold;" >Grand Total</span> $${totalPriceWithCharges}</p>
                  </div>
                  </td>
                </tr>
                <tr>
                <td>
                <p style="padding-bottom: 50px; border-bottom: 2px solid #999999;">Please login to your BongOz Films account to find your booked seats. Just show this at the venue for entry.</p>
                </td>
                </tr>
                <tr>
                  <td>
                  <div style='width: 50%;'>
                  <p class="footer_p"> THANK YOU!</p>
                  <p class="footer_p"> BongOz Films Team</p>
                  <p class="footer_p"> Email: <a href="mailto:info@bongozfilms.com">info@bongozfilms.com</a></p>
                  <p class="footer_p"> Mobile: +61 406 063 058</p>
                  </div>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      
        
      </tbody>
      </table>
  </body>

</html>`;

const root = document.getElementById("root");

root.innerHTML = message;

console.log(message);
