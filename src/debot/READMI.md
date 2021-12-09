# DeBot

 
## To start the Debot on Ton Surf
<ul dir="auto">
<li>Follow the link to the <a href = "https://web.ton.surf/debot?address=0%3Ab8716bbb76f8e328164949e13695637879331e4d499127d8c2adf74bbfcbcd91&net=devnet&restart=true">Ton Surf </a></li>
<li>Enter your wallet address</li>
<li>Enter your Nft Root address</li>
Example: 0:4de52efe97e4333b56536f2b216c02d7ae3326cdc02364a3c3ab7e2d420629da
 <li>Follow the instructions</li>
</ul>

## To deploy DeBot manually
<ul dir="auto"> 
  <li>Run <p><code>tonos-cli genaddr NftDebot.tvc NftDebot.abi.json --genkey NftDebot.keys.json > log.log</code></p></li>
  <li>Transfer the funds to the address in the log.log file</li>
  <li>Run <p><code>tonos-cli --url https://net.ton.dev deploy NftDebot.tvc "{}" --sign NftDebot.keys.json --abi NftDebot.abi.json</code></p></li>
  </ul>
  
## To run DeBot 
<ul dir="auto">
<li>Run <code>bash deploy.sh</code></li>
  Or
  <li>Go to <a href = "https://web.ton.surf">Ton Surf</a></li>
  <li>Enter your DeBot address on window "Browse DeBots"</li>
</ul>

