module.exports = [{
  name: "perms",
  code: `
  <@$authorID>
  $title[Current Perms!]
  $description[\`\`\`
  Current perms for $authorID is:

  $userPerms[$authorID;, ;$guildID]
  \`\`\`]
  $color[Green]
  $addTimestamp
  $footer[Requested by: $username]
  `
}]