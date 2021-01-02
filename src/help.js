const help = (prefixo) => {
return `> * Comandos de adesivos * <
comando: * $ {prefix} adesivo * ou * $ {prefix} stiker *
desc: conversor imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \ n
comando: * $ {prefix} sticker nobg * ou * $ {prefix} stiker nobg *
desc: conversor imagem em adesivo removendo o fundo
uso: responder imagem ou enviar imagem com legenda \ n
comando: * $ {prefix} toimg *
desc: conversor adesivo em imagem
uso: adesivo de resposta \ n
comando: * $ {prefix} tsticker * ou * $ {prefix} tstiker *
desc: conversor texto em adesivo
uso: * $ {prefix} texto tsticker aqui * \ n
> * Comandos Meme * <
comando: * $ {prefix} meme *
desc: imagens aleatórias de meme [inglês]
uso: basta enviar o comando \ n
comando: * $ {prefix} memeindo *
desc: imagens aleatórias de meme [indo]
uso: apenas envie o comando \ n
> * Outros comandos * <
comando: * $ {prefix} gtts *
desc: conversor texto em fala / áudio
uso: * $ {prefix} gtts [cc] [texto] * \ nexemplo: * $ {prefix} gtts ja On2-chan * \ n
comando: * $ {prefix} loli *
desc: imagens aleatórias de loli
uso: apenas envie o comando \ n
comando: * $ {prefix} nsfwloli *
desc: imagens aleatórias de nsfw loli
uso: basta enviar o comando \ n
comando: * $ {prefix} url2img *
desc: faz capturas de tela da web
uso: * $ {prefix} url2img [tipe] [url] * \ n
comando: * $ {prefix} simi *
desc: sua mensagem será respondida por simi
uso: * $ {prefix} simi yourmessage * \ n
comando: * $ {prefix} ocr *
desc: pegue o texto na foto
uso: responder imagem ou enviar imagem com legenda \ n
comando: * $ {prefix} esperar *
desc: pesquisar anime com imagem [What Anime Is This / That]
uso: responder imagem ou enviar imagem com legendan \ n
comando: * $ {prefix} setprefix *
desc: substituir prefixo
uso: * $ {prefix} setprefix [texto | opcional] * \ nexemplo: * $ {prefix} setprefix? *
nota: este comando só pode ser usado pelo proprietário do bot \ n
> * Comandos do Grupo * <
comando: * $ {prefix} grupo de links *
desc: pegue o link do grupo
uso: basta enviar o comando \
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
comando: * $ {prefix} tagall *
desc: marca todos os membros do grupo, incluindo administradores também
uso: apenas envie o comando
observação: este comando pode ser usado se você for um administrador do grupo \ n
comando: * $ {prefix} simih *
desc: ative o modo simi no grupo
uso: * $ {prefix} simih 1 * para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
nota: este comando pode ser usado se você for um admin \ n`
}

exportações.help = ajuda
