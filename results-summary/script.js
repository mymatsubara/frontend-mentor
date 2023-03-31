let summary_data = [
	{
		category: "Reaction",
		score: 80,
		icon: "./assets/images/icon-reaction.svg",
	},
	{
		category: "Memory",
		score: 92,
		icon: "./assets/images/icon-memory.svg",
	},
	{
		category: "Verbal",
		score: 61,
		icon: "./assets/images/icon-verbal.svg",
	},
	{
		category: "Visual",
		score: 72,
		icon: "./assets/images/icon-visual.svg",
	},
];

function summaryScore(data) {
	let template = document.createElement("template");
	let content = `
          <div class="summary-score-container ${data.category.toLowerCase()}-colors">
            <img src="${data.icon}" />
            <div class="summary-score-title">${data.category}</div>
            <div class="flex-grow"></div>
            <div class="summary-score-number extra-bold">${data.score}</div>
            <div class="summary-score-maximum bold">/ 100</div>
          </div>
    `.trim();

	template.innerHTML = content;
	return template.content.firstChild;
}

let summary_scores = document.getElementById("summary-scores");

for (score_data of summary_data) {
	console.log(score_data);
	console.log(summary_scores);
	let score_node = summaryScore(score_data);
	console.log(score_node);
	summary_scores.appendChild(score_node);
}
