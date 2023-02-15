module.exports = [{
  name: "dm",
  code: `
  $message
  $dm[$mentioned[1;no]]
  $title[Recieved DM!]
  $description[
  you have been sent a DM by <@$authorID>
  "$message"
  ]
  $color[Green]
  $addTimestamp
  $footer[Requested by: $username]
  `
}]