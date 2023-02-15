module.exports = [{
    name: "help",
    code: `
    $title[Help Command]
    $color[Green]
    $description[
        **Moderation**:
        ~Ban(inc.)
        Usage: "Unknown"
        
        ~Kick(inc.)
        Usage: "~kick [mentioned player]"

        ~Perms
        Usage: "~perms"

        **Information**:
        ~Help
        Usage: "~help"

        ~Credits
        Usage: "~credits"

        ~GiveID
        Usage: "~giveID [Mention]"
        
        ~Ping(inc.)
        Usage: "Unknown"
        
        ~Info
        Usage: "Unknown"
        
        ~Dm
        Usage: "~dm [mentioned user] [message]"
        
        ~MessageOwner
        Usage: "~messageOwner [message]"

        ~Status
        Usage: "~status"
        
        *inc.* = Incomplete
        [message] = Addable flags, do **NOT** include the "[]"
    ]
    $addTimestamp
    $footer[Requested by: $username]
    `
}]