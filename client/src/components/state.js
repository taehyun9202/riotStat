export const API_KEY = "RGAPI-8d866ef7-4dd5-47a6-b8c1-c8c5f615d6cc"
// export const API_KEY = prompt("Enter API KEY")
export var language = "en_US"
export var version = "11.6.1"

export const convertChampionId = id => {
    switch(id) {
        case 266:
            return "Aatrox"
        case 103:
            return "Ahri"
        case 84:
            return "Akali"
        case 12:
            return "Alistar"
        case 32:
            return "Amumu"
        case 34:
            return "Anivia"
        case 1:
            return "Annie"
        case 523:
            return "Aphelios"
        case 22:
            return "Ashe"
        case 136:
            return "AurelionSol"
        case 268:
            return "Azir"
        case 432:
            return "Bard"
        case 53:
            return "Blitzcrank"
        case 63:
            return "Brand"
        case 201:
            return "Braum"
        case 51:
            return "Caitlyn"
        case 164:
            return "Camille"
        case 69:
            return "Cassiopeia"
        case 31:
            return "Chogath"
        case 42:
            return "Corki"
        case 122:
            return "Darius"
        case 131:
            return "Diana"
        case 119:
            return "Draven"
        case 36:
            return "DrMundo"
        case 245:
            return "Ekko"
        case 60:
            return "Elise"
        case 28:
            return "Evelynn"
        case 81:
            return "Ezreal"
        case 9:
            return "Fiddlesticks"
        case 114:
            return "Fiora"
        case 105:
            return "Fizz"
        case 3:
            return "Galio"
        case 41:
            return "Gangplank"
        case 86:
            return "Garen"
        case 150:
            return "Gnar"
        case 79:
            return "Gragas"
        case 104:
            return "Graves"
        case 120:
            return "Hecarim"
        case 74:
            return "Heimerdinger"
        case 420:
            return "Illaoi"
        case 39:
            return "Irelia"
        case 427:
            return "Ivern"
        case 40:
            return "Janna"
        case 59:
            return "JarvanIV"
        case 24:
            return "Jax"
        case 126:
            return "Jayce"
        case 202:
            return "Jhin"
        case 222:
            return "Jinx"
        case 145:
            return "Kaisa"
        case 429:
            return "Kalista"
        case 43:
            return "Karma"
        case 30:
            return "Karthus"
        case 38:
            return "Kassadin"
        case 55:
            return "Katarina"
        case 10:
            return "Kayle"
        case 141:
            return "Kayn"
        case 85:
            return "Kennen"
        case 121:
            return "Khazix"
        case 203:
            return "Kindred"
        case 240:
            return "Kled"
        case 96:
            return "KogMaw"
        case 7:
            return "Leblanc"
        case 64:
            return "LeeSin"
        case 89:
            return "Leona"
        case 876:
            return "Lillia"
        case 127:
            return "Lissandra"
        case 236:
            return "Lucian"
        case 117:
            return "Lulu"
        case 99:
            return "Lux"
        case 54:
            return "Malphite"
        case 90:
            return "Malzahar"
        case 57:
            return "Maokai"
        case 11:
            return "MasterYi"
        case 21:
            return "MissFortune"
        case 62:
            return "MonkeyKing"
        case 82:
            return "Mordekaiser"
        case 25:
            return "Morgana"
        case 267:
            return "Nami"
        case 75:
            return "Nasus"
        case 111:
            return "Nautilus"
        case 518:
            return "Neeko"
        case 76:
            return "Nidalee"
        case 56:
            return "Nocturne"
        case 20:
            return "Nunu"
        case 2:
            return "Olaf"
        case 61:
            return "Orianna"
        case 516:
            return "Ornn"
        case 80:
            return "Pantheon"
        case 78:
            return "Poppy"
        case 555:
            return "Pyke"
        case 246:
            return "Qiyana"
        case 133:
            return "Quinn"
        case 497:
            return "Rakan"
        case 33:
            return "Rammus"
        case 421:
            return "RekSai"
        case 526:
            return "Rell"
        case 58:
            return "Renekton"
        case 107:
            return "Rengar"
        case 92:
            return "Riven"
        case 68:
            return "Rumble"
        case 13:
            return "Ryze"
        case 360:
            return "Samira"
        case 113:
            return "Sejuani"
        case 235:
            return "Senna"
        case 147:
            return "Seraphine"
        case 875:
            return "Sett"
        case 35:
            return "Shaco"
        case 98:
            return "Shen"
        case 102:
            return "Shyvana"
        case 27:
            return "Singed"
        case 14:
            return "Sion"
        case 15:
            return "Sivir"
        case 72:
            return "Skarner"
        case 37:
            return "Sona"
        case 16:
            return "Soraka"
        case 50:
            return "Swain"
        case 517:
            return "Sylas"
        case 134:
            return "Syndra"
        case 223:
            return "TahmKench"
        case 163:
            return "Taliyah"
        case 91:
            return "Talon"
        case 44:
            return "Taric"
        case 17:
            return "Teemo"
        case 412:
            return "Thresh"
        case 18:
            return "Tristana"
        case 48:
            return "Trundle"
        case 23:
            return "Tryndamere"
        case 4:
            return "TwistedFate"
        case 29:
            return "Twitch"
        case 77:
            return "Udyr"
        case 6:
            return "Urgot"
        case 110:
            return "Varus"
        case 67:
            return "Vayne"
        case 45:
            return "Veigar"
        case 161:
            return "Velkoz"
        case 254:
            return "Vi"
        case 234:
            return "Viego"
        case 112:
            return "Viktor"
        case 8:
            return "Vladimir"
        case 106:
            return "Volibear"
        case 19:
            return "Warwick"
        case 498:
            return "Xayah"
        case 101:
            return "Xerath"
        case 5:
            return "XinZhao"
        case 157:
            return "Yasuo"
        case 777:
            return "Yone"
        case 83:
            return "Yorick"
        case 350:
            return "Yuumi"
        case 154:
            return "Zac"
        case 238:
            return "Zed"
        case 115:
            return "Ziggs"
        case 26:
            return "Zilean"
        case 142:
            return "Zoe"
        case 143:
            return "Zyra"
    }
}

export const convertSummonerSpell = spell => {
    switch(spell) {
        case 1:
            return "SummonerBoost"
        case 3:
            return "SummonerExhaust"
        case 4:
            return "SummonerFlash"
        case 6:
            return "SummonerHaste"
        case 7:
            return "SummonerHeal"
        case 11:
            return "SummonerTeleport"
        case 12:
            return "SummonerSmite"
        case 13:
            return "SummonerMana"
        case 14:
            return "SummonerDot"
        case 21:
            return "SummonerBarrier"
        case 32:
            return "SummonerSnowURFSnowball_Mark"
    }
}

export const converlargestMultiKill = kill => {
    switch(kill) {
        case 1:
            return null
        case 2:
            return "Double Kill"
        case 3:
            return "Triple Kill"
        case 4:
            return "Quadra Kill"
        case 5:
            return "PENTA KILL!!"
    }
}

export const conversionItem = item => {
    var temp = item.toString()
    if (temp.length < 2){
      var convertedInteger = "0" + temp
      return convertedInteger
    } else {
      return item
    }
  }


export const getTime = time => { 
    var minutes = Math.floor(time / 60);
    var seconds = Math.round(time - minutes * 60);
    return minutes.toString() + "m " + seconds.toString() + "s"
  }


export const getDate = date => {
      var index = date?.indexOf(',')
      return date?.slice(0, index)
  }