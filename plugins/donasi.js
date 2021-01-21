let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [+628987183535]
│ • By.u [+6285157756287]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
