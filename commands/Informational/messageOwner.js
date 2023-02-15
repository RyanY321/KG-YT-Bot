module.exports = [{
  name: "messageOwner",
  code: `
  $message
  $dm[$ownerID[$guildID]]
  $title[You have recieved a DM!]
  $description[
  you have recieved a DM from member <@$authorID>
  "$message"
  ]
  $color[Green]
  $addTimestamp
  $footer[Requested by: $username]
  `
}]