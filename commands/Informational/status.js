module.exports = [{
  name: "status",
  code: `
  $title[Bot Status!]
  $description[
  CPU: $cpu[os]%/1.00%
  Ping: $pingMS
  DatabasePing: $databasePing MS
  MessageLatency: $messagePing MS
  Platform: $platform[$authorID;$guildID;, ]
  RAM: $ram%/100.0%
  Uptime: $uptime[full]
  Shard: $shardID
  ]
  $color[Green]
  $addTimestamp
  $footer[Requested by: $username]
  `
}]