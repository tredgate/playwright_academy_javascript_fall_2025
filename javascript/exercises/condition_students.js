const actualPoints = 75;
const graduationLimit = 75;
const studentName = "Jiřina Dlouhá";

if (actualPoints >= graduationLimit) {
  console.log(`Student/ka ${studentName} prospěl/a s ${actualPoints}.`);
} else {
  console.log(
    `Student/ka ${studentName} neprospěl/a s ${actualPoints} body, minimum bylo: ${graduationLimit} bodů.`
  );
}
