// src/services/EmailService.js
const nodemailer = require("nodemailer");

let transporter = null;

// IP do servidor MailPit (professor informa)
const MAILPIT_HOST = process.env.SMTP_HOST;
const MAILPIT_PORT = process.env.SMTP_PORT;
// Porta do painel web do MailPit — NÃO é a mesma do SMTP, não dá pra deduzir uma da outra
const MAILPIT_PANEL_PORT = process.env.MAILPIT_PANEL_PORT;

async function inicializar() {
  transporter = nodemailer.createTransport({
    host: MAILPIT_HOST,
    port: MAILPIT_PORT,
    secure: false,
    tls: { rejectUnauthorized: false },
  });

  // Testar conexão
  try {
    await transporter.verify();
    console.log("═══════════════════════════════════════════");
    console.log("📧 Servidor de e-mail conectado!");
    console.log(`   MailPit: http://${MAILPIT_HOST}:${MAILPIT_PANEL_PORT}`);
    console.log("═══════════════════════════════════════════");
  } catch (erro) {
    console.error("⚠️ Servidor de e-mail indisponível:", erro.message);
    console.error("   Os e-mails não serão enviados.");
  }
}

async function enviar(para, assunto, html) {
  if (!transporter) {
    throw new Error("EmailService não inicializado.");
  }

  const info = await transporter.sendMail({
    from: '"Plataforma de Eventos" <eventos@notificacoes.com>',
    to: para,
    subject: assunto,
    html: html,
  });

  console.log(`📧 E-mail enviado para ${para} (ID: ${info.messageId})`);
  console.log(`   Visualizar em: http://${MAILPIT_HOST}:${MAILPIT_PANEL_PORT}`);

  return {
    messageId: info.messageId,
    visualizarEm: `http://${MAILPIT_HOST}:${MAILPIT_PANEL_PORT}`,
  };
}

module.exports = { inicializar, enviar };
