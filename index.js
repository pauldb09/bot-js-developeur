const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { getMember } = require("./functions.js");
client.on('message', message => {
    if (message.content === 'd!join') {
        client.emit('guildMemberAdd', message.member);
    }
});
client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity(`Joue à d!help | Créateur Golf7r#0007 | Codeur Pauldb09#9846 !`);
});

client.on('messageDelete', message => {;
    const channel = client.channels.get("752096607557779476");
    //message.channel.send('oui');
    channel.send(`un message de ${message.author.tag} a été supprimé`);
});

client.on("message", async message => {
    client.on('messageDelete', message => {
        message.guild.channels.find(channel => channel.name === "logs");
        message.channel.send('voilà');
        console.log(`un message de ${message.author.tag} a été supprimé`);
    });
    client.on('guildMemberRemove', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'test');
        if (!channel) return;
        channel.send(`${member.user.tag} vient de nous quitter , nous sommes donc ${message.guild.memberCount}`);
    });

    client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'test');
        if (!channel) return;
        const image = new Canvas.Goodbye()
            .setUsername("xixi52")
            .setDiscriminator("0001")
            .setMemberCount("140")
            .setGuildName("Server DEV")
            .setAvatar("https://cdn.craftburg.net/stockage/img/discord/avatar.jpg")
            .setColor("border", "#8015EA")
            .setColor("username-box", "#8015EA")
            .setColor("discriminator-box", "#8015EA")
            .setColor("message-box", "#8015EA")
            .setColor("title", "#8015EA")
            .setColor("avatar", "#8015EA")
            .setBackground("https://cdn.craftburg.net/stockage/img/discord/background.jpg")
            .toAttachment();

        const attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");

        message.channel.send(attachment);
    });


    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'mute') {
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("❌ vous n'avez pas la permission `ADMINISTRATEUR`");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member) return message.channel.sendMessage("❌ Merci de mentioner un utlisateur ");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "Aucunne raison donnée";
        member.send(`:mute:  Vous avez été muté sur le serveur **${message.guild.name}** pour la raison : **${reason}**`);
        const paul = new Discord.MessageEmbed()
            .setTitle('Muted !')
            .setDescription('Il y a des moments où il faut mieux se taire ;-)')
            .setThumbnail(url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGgi2B4_K4KYQ4B_sCaH_GWP1tiTxoXA0hAw&usqp=CAU')
            .addFields({ name: 'Modérateur', value: `${message.author.tag}` }, { name: 'menbre muté', value: `${member.user.tag}` }, { name: 'raison', value: `${reason}` });
        message.channel.send(paul);

        // Remove a role!
        //  member.removeRole(role).catch(console.error);


    }

    if (command === 'cat') {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle('🐱 Voici un chat')
            .setImage(file)
        message.channel.send(doneEmbed);
    }
    if (command === 'panda') {
        const { link } = await fetch('https://some-random-api.ml/img/panda').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle('🐼 Voici un panda')
            .setImage(link)
        message.channel.send(doneEmbed);
    }
    if (command === 'oiseau') {
        const { link } = await fetch('https://some-random-api.ml/img/birb').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle('🐦 Voici un oiseau')
            .setImage(link)
        message.channel.send(doneEmbed);
    }
    if (command === 'rpanda ') {
        const { link } = await fetch('https://some-random-api.ml/img/red_panda').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle('🐼  Voici un panda rouge')
            .setImage(link)
        message.channel.send(doneEmbed);
    }
    if (command === 'koala') {
        const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle('🐨 Voici un koala')
            .setImage(link)
        message.channel.send(doneEmbed);
    }
    if (command === 'renard') {
        const { link } = await fetch('https://some-random-api.ml/img/fox').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle('🦊 Voici un renard')
            .setImage(link)
        message.channel.send(doneEmbed);
    }
    if (command === "dog") {
        const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
        const doneEmbed = new Discord.MessageEmbed()
            .setColor('#e3dcd3')
            .setTitle(':dog: Voici un chien')
            .setImage(url)
        message.channel.send(doneEmbed);
    }
    if (command === 'help') {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('<:help:752114474105962536>  - Page d’aide')

        .setDescription('Bonjour, bienvenue dans la page d’aide du bot </> Développeur, si vous trouvez un bug merci de faire d!bug <le bug> pour que mon développeur le voit très rapidement ! Merci !')

        .setThumbnail('https://botsdiscord.000webhostapp.com/img/icone.png')
            .addFields({ name: '<:admin:752117302362636351> | Administrateur : ', value: '`kick` , `ban` , `clear` , `warn` , `mute` , `unmute`' })
            .addFields({ name: '<:modo:752114586551058525> | Modération : ', value: '`info` , `site` , `insta` , `avatar` , `ping` , `bot` , `stopbot`' })
            .addFields({ name: '<:star:752168549329534977> | Images : ', value: '`cat` , `dog` , `panda` ,`oiseau` , `renard` , `koala` , `rpanda `' })
            .addFields({ name: '<:fun:752115696015507567> | Fun :', value: '`say` , `bvn` , `tuer` , `saluer` ,' })
            .addFields({ name: '<:rpg:752117385892200609> | RPG :', value: '`cat` , `dog` , `login`' })
            .addFields({ name: '<:utilitaire:752115575508959242> | Utilitaires :', value: '`say` , `bvn` , `tuer` , `saluer` , `cat` , `dog`' })
            .addFields({ name: ' Serveur Discord', value: '<:discord:752116965761613885>[Cliquez ici pour rejoindre le serveur Discord](https://discord.gg/cNq3Sp6)' })
            .addFields({ name: ' Inviter le bot', value: '<:bot:752121471819579473>[Cliquez ici pour inviter le bot](https://discord.com/api/oauth2/authorize?client_id=751860365167427704&permissions=8&scope=bot)' })
            .addFields({ name: ' Site web', value: '🌐 [Cliquez ici pour aller sur le site du bot](https://tutosduweb.000webhostapp.com/)' })
            .setTimestamp()
            .setFooter(`page demandée par ${message.author.tag}`, `https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg`);

        message.channel.send(exampleEmbed);
    }
    if (command === 'info') {
        const paul = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`ℹ info du serveur ℹ`)

        .setAuthor('Discord bots', 'https://botsdiscord.000webhostapp.com/img/icone.png', 'https://botsdiscord.000webhostapp.com/index.php')
            .setDescription(`${message.guild.name}`)
            .addField(`description`, message.guild.description, true)
            .setThumbnail(`https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-info-vector-icon-png-image_355800.jpg`)

        .addField('Nb de personnes :', message.guild.memberCount, true)
            .addField('nb de salons  :', message.guild.channels.cache.size, true)
            .addField('nb de roles :', message.guild.roles.cache.size, true)
            .addField('nb d \'emojis :', message.guild.emojis.cache.size, true)
            .addField('embed channel :', message.guild.embedChannel, true)
            .addField('niveau de notifications:', message.guild.defaultMessageNotifications, true)
            .addField('salon de messages système:', message.guild.systemChannel, true)
            .addField('salon afk:', message.guild.afkChannel, true)
            .addField('salon avec un widget:', message.guild.widgetChannel, true)
            .addField('salon d\'invitation du widget :', message.guild.embedChannel, true)
            .addField('salon des règles:', message.guild.rulesChannel, true)
            .addField('salon des annonces:', message.guild.publicUpdatesChannel, true)
            .addField('niveau de sécurité', message.guild.verificationLevel, true)
            .addField('Région', message.guild.region, true)
            .addField('propriétaire', message.guild.owner.user.tag, true)
            .addField('crée le :', message.guild.createdAt, true)

        .setTimestamp()
            .setFooter('discord bots @2020', 'https://botsdiscord.000webhostapp.com/img/icone.png');

        message.channel.send(paul);
    }
    if (command === 'bot') {
        const paul = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Info du Bot')

        .setAuthor('Discord bots', 'https://botsdiscord.000webhostapp.com/img/icone.png', 'https://botsdiscord.000webhostapp.com/index.php')

        .setThumbnail('https://botsdiscord.000webhostapp.com/img/icone.png')
            .addFields({ name: 'Nb de serveurs', value: `${client.guilds.cache.size}` }, {
                name: 'Créateur :',
                value: ` 𝖕𝖆𝖚𝖑𝖉𝖇09#9846`
            }, { name: 'Pays : ', value: `France :flag_fr: ` }, { name: 'crée le :', value: `${message.guild.createdAt}` })
            .addField('Nb de salons dans les serveurs', `${client.channels.cache.size}`)
            .addField('Nb d\'utilisateurs  dans les serveurs', `${client.users.cache.size}`)
            .setTimestamp()
            .setFooter('discord bots @2020', 'https://botsdiscord.000webhostapp.com/img/icone.png');

        message.channel.send(paul);
    }
    if (command === "ping") {

        const m = await message.channel.send("Ping?");
        m.edit(`Pong! réponse en ${m.createdTimestamp - message.createdTimestamp}ms. perte de ${Math.round(client.ws.ping)}ms`);
        const paul = new Discord.MessageEmbed()
            .setTitle('Avertisement')
            .setDescription('Un modérateur a avertit quelqu\'un')
            .setImage(url = 'https://img-0.journaldunet.com/nGRbJBSdDXpOtOZ9Ook6aFehDBI=/1280x/smart/dc654fb282414e7280565988f5d37ce5/ccmcms-jdn/10656881.jpg')
            .addFields({ name: 'Modérateur', value: `${message.author.tag}` }, { name: 'membre avertit', value: `${member.user.tag}` }, { name: 'raison', value: `${reason}` });



        message.channel.send(paul);
    }

    if (command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }

    if (command === "kick") {

        if (!message.member.hasPermission("KICK_MEMBERS"))
            return message.reply("❌ vous n'avez pas la permission `EXPULSER_MEMBRES`");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member)
            return message.reply("❌ cette personne n'existe pas");
        if (!member.kickable)
            return message.reply("❌ je ne peux pas expulser un administrateur");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "Aucune raison";
        member.send(`:lock:  Vous avez été exclu du serveur **${message.guild.name}** pour la raison : **${reason}**..........`);
        await member.kick(reason)
        const paul = new Discord.MessageEmbed()
            .setTitle('Expulsion !')
            .setDescription('Un modérateur a exclu quelqu\'un')
            .setImage(url = 'https://i2.wp.com/immobilier-versus-wild.blog/wp-content/uploads/2017/11/icon_expulsion.jpg?fit=660%2C375&ssl=1')
            .addFields({ name: 'Modérateur', value: `${message.author.tag}` }, { name: 'menbre exclu', value: `${member.user.tag}` }, { name: 'raison', value: `${reason}` });



        message.channel.send(paul);
    }
    if (command === "warn") {

        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("❌ vous n'avez pas la permission `ADMINISTRATEUR`");

        let member = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!member)
            return message.reply("❌ cette personne n'existe pas");
        //if (!member.kickable)
        //  return message.reply("❌ je ne peux pas avertir un administrateur");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "Aucune raison";
        member.send(`:warning: Vous avez été avertit sur le serveur **${message.guild.name}** pour la raison : **${reason}**`);
        await (reason)
        const paul = new Discord.MessageEmbed()
            .setTitle('Avertisement')
            .setDescription('Un modérateur a avertit quelqu\'un')
            .setImage(url = 'https://img-0.journaldunet.com/nGRbJBSdDXpOtOZ9Ook6aFehDBI=/1280x/smart/dc654fb282414e7280565988f5d37ce5/ccmcms-jdn/10656881.jpg')
            .addFields({ name: 'Modérateur', value: `${message.author.tag}` }, { name: 'membre avertit', value: `${member.user.tag}` }, { name: 'raison', value: `${reason}` });



        message.channel.send(paul);

    }
    if (command === "ban") {

        if (!message.member.hasPermission("BAN_MEMBERS"))
            return message.reply("❌ vous n'avez pas la permission `BANNIR_MEMBRES`");

        let member = message.mentions.members.first();
        if (!member)
            return message.reply("❌ Cette personne n'existe pas sur ce serveur !");
        if (!member.bannable)
            return message.reply("❌ Je ne peux pas bannir ce membre . Problème de hiérarchie");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "Aucunne raison donnée";
        member.send(`:lock:  Vous avez été bannit du serveur **${message.guild.name}** pour la raison : **${reason}**..........`);
        await member.ban(reason)
            .catch(error => message.reply(`désolé ${message.author} Je ne peux pas le faire car : ${error}`));
        const paul = new Discord.MessageEmbed()
            .setTitle('Banissement !')

        .setImage('https://www.jeuxactu.com/datas/jeux/o/v/overwatch/vn/overwatch-57ab27dc12a15.jpg')
            .addFields({ name: 'Modérateur', value: `${message.author.tag}` }, { name: 'menbre banni', value: `${member.user.tag}` }, { name: 'raison', value: `${reason}` });



        message.channel.send(paul);
    }
    if (command === "bvn") {
        if (!message.mentions.users.size) {
            return message.reply('Merci d\'indiquer à qui vous voulez souhaiter la bienvenue!');
        }

        const taggedUser = message.mentions.users.first();
        const paul = new Discord.MessageEmbed()
            .setTitle(`Bienvenue`)

        .setDescription(`${message.author.tag} souhaite la bienvenue à  ${taggedUser.username}`)

        .setImage('https://www.cos38.com/data/contenu/dropzone/f9adaeb3324a2feaf944a3b4cfaf3458.jpg')



        message.channel.send(paul);

    }

    if (command === "tuer") {
        if (!message.mentions.users.size) {
            return message.reply('Merci d\'indiquer à qui vous voulez tuer!');
        }

        const taggedUser = message.mentions.users.first();
        const paul = new Discord.MessageEmbed()
            .setTitle(`Meurtre`)

        .setDescription(`${message.author.tag} tue ${taggedUser.username}`)

        .setImage('https://www.cabinetaci.com/wp-content/uploads/2016/05/Meurtre-min.png')



        message.channel.send(paul);

    }
    if (command === "saluer") {
        if (!message.mentions.users.size) {
            return message.reply('Merci d\'indiquer qui vous voulez saluer!');
        }

        const taggedUser = message.mentions.users.first();
        const paul = new Discord.MessageEmbed()
            .setTitle(`Salut`)

        .setDescription(`${message.author.tag} salue ${taggedUser.username}`)

        .setImage('https://www.rts.ch/2014/06/25/11/39/5959337.image?w=960&h=384')



        message.channel.send(paul);

    }



    if (command === "stopbot") {

        message.reply('Le bot va être éteint.\n' +
            'Confirmez avec `✅` ou annulez avec `✖`.');
        message.react('✅').then(() => message.react('✖'));
        const filter = (reaction, user) => {
            return ['✅', '✖'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '✅') {
                    message.reply('Arrêt en cours...');
                    client.destroy(config.token);
                } else {
                    message.reply('Opération annulée.');
                }
            })
            .catch(collected => {
                message.reply('Aucune réponse après 30s , anulation');
            });
    }


    if (command === "clear") {
        //  if (!message.member.hasPermission("ADMINISTRATOR"))
        //    return message.reply("❌ vous n'avez pas la permission `GERER_MESSAGES`");
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Merci de mettre un chiffre ente 1 et 100");
        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Je ne peux pas supprimer de messages car : ${error}`));
    }
    if (command === "home") {
        const paul = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Site')

        .setAuthor('Discord bots', 'https://botsdiscord.000webhostapp.com/img/icone.png', 'https://botsdiscord.000webhostapp.com/index.php')

        .setThumbnail('https://botsdiscord.000webhostapp.com/img/icone.png')
            .addField('Accueil', `🏠`)
            .addField('Ajouter un bot', `➕`)
            .addField('connexion', `👨🏼`)
            .addField('inscription', `⚙`)
            .setTimestamp()
            .setFooter('discord bots @2020', 'https://botsdiscord.000webhostapp.com/img/icone.png');

        message.channel.send(paul);
        message.react('🏠').then(() => message.react('➕'));
        const filter = (reaction, user) => {
            return ['🏠', '➕'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '🏠') {
                    const paul = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Accueil', 'https://botsdiscord.000webhostapp.com/index.php')
                        .setURL('https://botsdiscord.000webhostapp.com/index.php')
                        .setAuthor('Discord bots', 'https://botsdiscord.000webhostapp.com/img/icone.png', 'https://botsdiscord.000webhostapp.com/index.php')
                        .setDescription('Discord bots | Le site qui recense tous les bots discord ,si votre bot n\'y est pas , vous pouvez l\'ajouter')
                        .setThumbnail('https://botsdiscord.000webhostapp.com/img/bg.jpg')

                    .setTimestamp()
                        .setFooter('discord bots @2020', 'https://botsdiscord.000webhostapp.com/img/icone.png');

                    message.channel.send(paul);
                } else {
                    message.reply('you reacted with a thumbs down.');
                }
            })
            .catch(collected => {
                message.reply('Vous n\'avez ajouté aucune réaction');
            });
    }

});

client.login(config.token);