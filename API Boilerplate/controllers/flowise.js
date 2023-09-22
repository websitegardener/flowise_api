export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

    // Call the Flowise Endpoint
    const response = await fetch(
      `${process.env.FLOWISE_URL}/api/v1/prediction/${process.env.Flow_ID}`, // URL as first argument
      {
        // Options object as second argument
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`,
        },
        body: JSON.stringify(flowiseData),
      }
    );

    res.status(200).json({ message: "Demo Response" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
