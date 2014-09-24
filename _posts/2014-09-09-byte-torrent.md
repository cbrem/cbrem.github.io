---
title: ByteTorrent
category: Software
---

ByteTorrent is a BitTorrent-like peer-to-peer application. Its use is similar to BitTorrent's: it allows a number of clients to create torrent files which describe data files, share these torrent files via a tracker server, and share files directly. It also addresses many of the design challenges that BitTorrent did: for example, how do clients deal with other malicious clients?

ByteTorrent is written in Go, and utilizes Go's message-passing concurrency model throughout for high performance. ByteTorrent also uses an implemenation of the Paxos concensus protocol to keep its servers in sync.

ByteTorrent lives [here](https://github.com/cbrem/bytetorrent).
