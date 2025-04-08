/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
	  const response = await fetch("https://api.ipify.org?format=json");
	  const data = await response.text();
  
	  return new Response(data ?? "unknown", {
		headers: { "content-type": "text/plain" },
	  });
	},
  };
  