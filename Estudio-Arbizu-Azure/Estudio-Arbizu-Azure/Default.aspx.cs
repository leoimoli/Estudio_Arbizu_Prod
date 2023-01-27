using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Estudio_Arbizu_Azure
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnEnviar_Click(object sender, EventArgs e)
        {
            string Mensaje = "";
            //using (StreamReader reader = new StreamReader(Server.MapPath("~/CuerpoEmail.html")))
            //{
            //    txt
            //    Mensaje = reader.ReadToEnd();
            //}

            //string url = ConfigurationManager.AppSettings["SITIO_CONSULTAR_PUBLICACION"] + publicacion.idPublicacion;
            //Mensaje = Mensaje.Replace("{URL}", url);

            Mensaje = txtMensaje.Value;


            string firmaEmail = ConfigurationManager.AppSettings["FIRMA_EMAIL"];
            string CuentaEmail = ConfigurationManager.AppSettings["CUENTA_EMAIL"];
          
            string Destinatario = ConfigurationManager.AppSettings["CUENTA_EMAIL"];
            string ApellidoNombre = txtNombre.Value;
            string CuerpoEmail = "Desde la cuenta de Email: '" + txtEmail.Value + "' <br>  Estimada Contadora: Mi nombre es '" + ApellidoNombre + "',  '" + txtMensaje.Value + "'";
            string Pass = ConfigurationManager.AppSettings["CLAVE_EMAIL"]; ;

            MailMessage msg = new MailMessage();
            //Quien escribe al correo
            msg.From = new MailAddress(CuentaEmail);
            //A quien va dirigido
            msg.To.Add(new MailAddress(Destinatario));
            //Asunto
            msg.Subject = txtAsunto.Value;
            //Contenido del correo
            //msg.Body = CuerpoEmail + "<br />" + firmaEmail + "<br />";

            MailMessage oEmail = new MailMessage(CuentaEmail, Destinatario, txtAsunto.Value, CuerpoEmail)
            {
                IsBodyHtml = true
            };

            SmtpClient client = new SmtpClient();
            client.Credentials = new System.Net.NetworkCredential(CuentaEmail, Pass);
            client.Port = 587;
            client.Host = "smtp.gmail.com";
            client.EnableSsl = true; //Esto es para que vaya a través de SSL que es obligatorio con GMail
            try
            {
                client.Send(oEmail);
                string script = string.Format("alert('Gracias:{0}');", "Tu consulta ya fue enviada. en breve te responderemos");
                ClientScript.RegisterStartupScript(this.GetType(), "alert", script, true);
                //exito = true;
            }
            catch (Exception ex)
            {
                //exito = false;
            }
        }
    }
}