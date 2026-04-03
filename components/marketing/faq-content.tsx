import type { ReactNode } from "react";

export type MarketingFaqGroup = {
  id: string;
  cats: string[];
  title: string;
  content: ReactNode;
};

export const FAQ_SIDEBAR: { id: string; label: string }[] = [
  { id: "faq-belong-nonchristian", label: "If we are not Christian, will our child belong?" },
  { id: "faq-pressure-belief", label: "Will my child be pressured to believe?" },
  { id: "faq-beliefs-open", label: "How openly do you talk about your beliefs?" },
  { id: "faq-different-perspectives", label: "Different perspectives in the classroom" },
  { id: "faq-microschool", label: "How do you define microschool?" },
  { id: "faq-learning-different", label: "What makes learning here different?" },
  { id: "faq-challenge", label: "How do you challenge students academically?" },
  { id: "faq-progress", label: "How do you measure student progress?" },
  { id: "faq-extra-help", label: "Students who need extra help" },
  { id: "faq-ahead", label: "Students who are ahead" },
  { id: "faq-tech-classroom", label: "How is technology used in class?" },
  { id: "faq-ai-approach", label: "What is your approach to AI?" },
  { id: "faq-screens", label: "Are students on screens all day?" },
  { id: "faq-typical-day", label: "What does a typical day feel like?" },
  { id: "faq-discipline", label: "How do you handle discipline?" },
  { id: "faq-character", label: "Building character, not just academics" },
  { id: "faq-student-well", label: "What kind of student does well here?" },
  { id: "faq-families-fit", label: "What kind of families are a good fit?" },
  { id: "faq-unsure-fit", label: "Unsure if this is the right fit?" },
  { id: "faq-observe-visit", label: "Observe a class or visit?" },
  { id: "faq-continue-conversation", label: "How do we continue the conversation?" },
];

export const FAQ_GROUPS: MarketingFaqGroup[] = [
  {
    id: "faq-belong-nonchristian",
    cats: ["beliefs"],
    title: "If we are not Christian, will our child still belong here?",
    content: (
      <>
        <p>Yes.</p>
        <p>
          Families from many backgrounds are part of our community. At the same
          time, we are open about the fact that our school is shaped by the
          Christian faith.
        </p>
        <p>
          Your child will encounter that through chapel, Scripture, and classroom
          discussions. Every student is treated with genuine respect and dignity
          here, regardless of where they or their family stands on matters of
          faith. Students are encouraged to ask honest questions and are not
          expected to perform belief they do not hold.
        </p>
        <p>
          Belonging here does not require pretending to believe something. It does
          require openness to a community that is clear about its foundation.
        </p>
      </>
    ),
  },
  {
    id: "faq-pressure-belief",
    cats: ["beliefs"],
    title: "Will my child be pressured to believe something?",
    content: (
      <>
        <p>No.</p>
        <p>
          We do not force belief or expect students to say what they think adults
          want to hear. We care more about honesty than agreement.
        </p>
        <p>
          Students are encouraged to ask real questions, think carefully, and
          come to their own conclusions over time.
        </p>
      </>
    ),
  },
  {
    id: "faq-beliefs-open",
    cats: ["beliefs"],
    title: "How openly do you talk about your beliefs?",
    content: (
      <>
        <p>Very openly.</p>
        <p>
          We name our beliefs directly because families deserve to know what they
          are choosing. Our faith shapes how we teach, how we relate to students,
          and how we make decisions as a school, so we explain that clearly
          rather than leaving it implied.
        </p>
      </>
    ),
  },
  {
    id: "faq-different-perspectives",
    cats: ["beliefs", "academics"],
    title: "How do you handle different perspectives in the classroom?",
    content: (
      <>
        <p>
          We teach students how to engage with different ideas thoughtfully and
          respectfully.
        </p>
        <p>
          That includes listening carefully, asking good questions, and learning
          how to disagree without dismissing others. Students are exposed to a
          range of perspectives and are guided in how to think, not just what to
          think.
        </p>
      </>
    ),
  },
  {
    id: "faq-microschool",
    cats: ["academics"],
    title: "How do you define microschool?",
    content: (
      <>
        <p>
          The word microschool covers a wide range of models, from informal
          co-ops of fewer than 15 students to structured programs well over 100.
          Some are loosely organized and unaccredited; others are rigorous and
          fully credentialed.
        </p>
        <p>
          Renton Prep is a fully accredited K-12 school that chooses to stay
          small. That choice means students are known individually, instruction
          can be personalized, and relationships stay at the center of how
          learning happens.
        </p>
        <p>
          Our programs, including the Genesis Project, are grounded in
          accreditation standards and evidence-based practice, and all remain
          aligned with the school&apos;s mission and values.
        </p>
      </>
    ),
  },
  {
    id: "faq-learning-different",
    cats: ["academics"],
    title: "What makes your approach to learning different?",
    content: (
      <>
        <p>We focus on how students think, not just what they memorize.</p>
        <p>
          Students are asked to explore ideas, connect subjects, and apply what
          they learn to real problems. We care about depth of understanding, not
          just coverage.
        </p>
        <p>
          You will see this in interdisciplinary projects, discussions, and
          work that requires reflection and reasoning, not just recall.
        </p>
      </>
    ),
  },
  {
    id: "faq-challenge",
    cats: ["academics"],
    title: "How do you challenge students academically?",
    content: (
      <>
        <p>We set high expectations and support students in meeting them.</p>
        <p>
          That includes strong core academics, but also an emphasis on critical
          thinking, communication, and problem-solving. Students are expected to
          engage, not just complete assignments.
        </p>
        <p>We pay attention to each student&apos;s growth, not just their grades.</p>
      </>
    ),
  },
  {
    id: "faq-progress",
    cats: ["academics"],
    title: "How do you measure student progress?",
    content: (
      <>
        <p>
          We use a combination of traditional assessment and more meaningful
          indicators of learning.
        </p>
        <p>
          That includes projects, written work, discussions, and demonstrations
          of understanding. We want to see how students think, not just what they
          can repeat.
        </p>
        <p>
          Parents receive clear communication about both academic progress and
          overall development.
        </p>
      </>
    ),
  },
  {
    id: "faq-extra-help",
    cats: ["academics"],
    title: "How do you support students who need extra help?",
    content: (
      <>
        <p>We pay close attention to each student.</p>
        <p>
          When a student is struggling, we work with them directly, adjust
          support where needed, and stay in communication with families. The goal
          is not just to keep up, but to actually understand and grow.
        </p>
      </>
    ),
  },
  {
    id: "faq-ahead",
    cats: ["academics"],
    title: "How do you support students who are ahead?",
    content: (
      <>
        <p>
          Students who are ready for more are given opportunities to go deeper,
          not just move faster.
        </p>
        <p>
          That might include more complex project-based work, independent
          inquiry, or mentorship roles within the classroom. We want students to
          stay genuinely challenged and engaged, not simply ahead of the next
          assignment.
        </p>
      </>
    ),
  },
  {
    id: "faq-tech-classroom",
    cats: ["tech"],
    title: "How is technology used in the classroom?",
    content: (
      <>
        <p>Technology is used as a tool, not a substitute for thinking.</p>
        <p>
          Students learn how to use digital tools effectively, but also when not
          to use them. We are intentional about balancing technology with
          discussion, writing, and hands-on learning.
        </p>
      </>
    ),
  },
  {
    id: "faq-ai-approach",
    cats: ["tech"],
    title: "What is your approach to AI?",
    content: (
      <>
        <p>We teach students how to use AI thoughtfully and responsibly.</p>
        <p>
          That includes understanding what AI can do, where it can be helpful,
          and where it can limit thinking or creativity if overused. Students
          learn how to question outputs, not just accept them.
        </p>
      </>
    ),
  },
  {
    id: "faq-screens",
    cats: ["tech"],
    title: "Are students on screens all day?",
    content: (
      <>
        <p>No.</p>
        <p>
          Technology is part of the learning experience, but it does not dominate
          it. Students spend significant time in discussion, reading, writing,
          and collaborative work.
        </p>
      </>
    ),
  },
  {
    id: "faq-typical-day",
    cats: ["culture"],
    title: "What does a typical day feel like for a student?",
    content: (
      <>
        <p>Structured, but not rigid.</p>
        <p>
          Students move between focused academic work, discussion, and
          collaborative learning. There is a rhythm to the day that balances
          challenge with space to think and engage.
        </p>
        <p>
          Relationships matter here, so students are known by their teachers, not
          just managed.
        </p>
      </>
    ),
  },
  {
    id: "faq-discipline",
    cats: ["culture"],
    title: "How do you handle discipline?",
    content: (
      <>
        <p>We focus on responsibility, growth, and accountability. Not just punishment.</p>
        <p>
          When issues come up, we address them directly, help students understand
          the impact of their actions, and work toward better choices moving
          forward.
        </p>
      </>
    ),
  },
  {
    id: "faq-character",
    cats: ["culture"],
    title: "How do you build character, not just academics?",
    content: (
      <>
        <p>Character is built through daily expectations, not a separate program.</p>
        <p>
          Students are expected to take responsibility, treat others well, and
          engage honestly with their work. These habits are reinforced
          consistently across the school day.
        </p>
      </>
    ),
  },
  {
    id: "faq-student-well",
    cats: ["fit"],
    title: "What kind of student does well here?",
    content: (
      <>
        <p>
          Students who are curious, willing to ask questions, and open to being
          challenged tend to do well.
        </p>
        <p>
          They do not need to have everything figured out, but they should be
          willing to engage, think, and grow.
        </p>
      </>
    ),
  },
  {
    id: "faq-families-fit",
    cats: ["fit"],
    title: "What kind of families tend to be a good fit?",
    content: (
      <>
        <p>Families who value:</p>
        <ul>
          <li>strong academics with depth</li>
          <li>character and personal growth</li>
          <li>thoughtful use of technology</li>
          <li>clear beliefs paired with openness</li>
        </ul>
        <p>
          Fit here is less about background and more about engagement. Families
          who are genuinely invested in how their child is learning, and who want
          to be active partners rather than observers, tend to thrive here.
        </p>
      </>
    ),
  },
  {
    id: "faq-unsure-fit",
    cats: ["fit"],
    title: "What if we are unsure whether this is the right fit?",
    content: (
      <>
        <p>That is a normal place to start.</p>
        <p>
          We encourage families to ask questions, visit, and get a clear sense of
          how the school actually operates. The goal is not to convince everyone,
          but to help you make a well-informed decision.
        </p>
      </>
    ),
  },
  {
    id: "faq-observe-visit",
    cats: ["next"],
    title: "Can we observe a class or visit the school?",
    content: (
      <>
        <p>Yes.</p>
        <p>
          We believe the best way to understand the school is to see it in
          action. Visits give you a clearer sense of the environment, the teaching
          style, and how students engage.
        </p>
      </>
    ),
  },
  {
    id: "faq-continue-conversation",
    cats: ["next"],
    title: "How do we continue the conversation?",
    content: (
      <>
        <p>
          You can reach out directly, schedule a visit, or speak with someone on
          our team.
        </p>
        <p>
          We are happy to answer questions honestly and help you determine
          whether Renton Prep is the right fit for your family.
        </p>
      </>
    ),
  },
];
