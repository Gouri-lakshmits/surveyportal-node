import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
import User from "../models/userSchema.js";
import Auth from "../models/AuthSchema.js";

export async function createUser(req, res) {
  console.log("res", req);
  try {
    const result = await User.create(req.body);
    if (result) {
      res.status(200).json({ message: "success", result: result });
    } else {
      res.status(500).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
export async function registeruser(req, res) {
  const { email } = req.body;

  // Check if a user with the same email already exists
  const existingUser = await Auth.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: 'constant.USER_EXIST' });
  }

  try {
    // Create a new user
    const result = await Auth.create(req.body);

    if (result) {
      return res.status(200).json({ message: 'success', result });
    }
    throw new Error('Registration failed');
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

export async function login(req, res) {
  try {
    const result = await Auth.findOne({ email: req.body.email });

    if (!result) {
      return res.status(404).json({ message: "constant.NOT_FOUND" });
    }

    if (result.password !== req.body.password) {
      return res.status(401).json({ message: "constant.PASSWORD_MISS_MATCH" });
    }

    res.status(200).json({ message: "AUTHENTICATION_SUCCESSFUL", result: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getUser(req, res) {
  try {
    const q = await User.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function dropAllUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    console.log("id", req.params.id);
    res.json({ msg: "User Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

//insert all questions
export async function createQuestions(req, res) {
  console.log("res", req);
  try {
    const result = await Questions.create(req.body);
    if (result) {
      res.status(200).json({ message: "success", result: result });
    } else {
      res.status(500).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function dropAllQuestions(req, res) {
  try {
    await Questions.findByIdAndDelete(req.params.id);
    console.log("id", req.params.id);
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getAllResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

export async function storeAllResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username || !result) {
      throw new Error("Data Not Provided...!");
    }

    const data = await Results.create({
      username,
      result,
      attempts,
      points,
      achived,
    });
    res.json({ msg: "Result Saved Successfully...!", data });
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function dropAllResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
