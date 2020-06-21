import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SharePage = () => (
  <Layout>
    <SEO title="Share your StaffEng story" />
    <h3>Why collect stories?</h3>
    <p>
      There are so many different ways that folks reach Staff, Principal and Distinguished Engineer roles.


      As such, I often find that the best career advice for folks pursuing these roles


      <a href="https://lethain.com/share-stories-not-advice/">
        isn't advice at all
      </a>
      ,

      but rather the stories of folks who've already done it. Hearing dozens of folks share their map


      to a Staff-plus role should be
      far more useful than what any one person has seen at their company.
    </p>
    <p>
      The StaffEng project is focused on collecting folks' stories of reaching Staff-plus roles


      and succeeding once they're there.
    </p>

    <h3>Sharing your story</h3>

    <p>
      <em>
        Questions? Reach out to{" "}
        <a href="https://twitter.com/lethain">@lethain</a>
        {" "}
        or <code>lethain[at]gmail</code>
      </em>
    </p>

    <p>
      If you've reached a Staff-plus Engineer role, then I'd love to include your story


      in the collection. The process for sharing your story is:
    </p>

    <ol>
      <li>
        Review the{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 License
        </a>
        .

        By submitting a story to StaffEng, you are agreeing to have it published under this license.
      </li>
      <li>
        Create a copy of the
        {" "}
        <a
          href="https://docs.google.com/document/d/10BeIfuE1wI3zB4GKyuCHzRm1Coq_m7rrFX_ubrhpv0w/edit"
        >
          StaffEng questions
        </a>
        ,

        and share your copy, with edit permissions please, to me at{" "}
        <code>lethain[at]gmail</code>
      </li>
      <li>
        Write your answers into the copied document. Look at{" "}
        <a href="/stories">the stories so far</a>
        {" "}

        for reference points. Do not spend more than four hours on this before moving to the next step!


        Especially if you're an infrequent writer, it's better to submit an early draft for concept editing


        before you go too far.
      </li>
      <li>
        Email me letting me know that your story is ready for comments, and
        I'll review your story. Please include a link to your copied questions document.
      </li>
      <li>
        If I believe your story would publish well as it stands, then I'll make some line edits


        and publish it to staffeng.com in an unlinked post. I'll share this unlinked post


        back to you for final approval before it's shared publicly.
      </li>
      <li>
        If I don't believe the post is ready to publish, I'll provide concept-level


        suggestions on the changes that I believe would be necessary for it to be published.


        It would then be up to you to decide if you'd like to publish it yourself,


        or if you're up for incorporating the conceptual edits and letting me know


        once you're ready for another review. If you do self-publish, send me a link


        and I'll link out to it!
      </li>
      <li>
        At this point, I'll schedule your story to publish, at which point it will


        get emailed out to the email list, published on the{" "}
        <a href="/rss">RSS feed</a>
        ,

        and added to the <a href="/stories">list of stories</a>.
      </li>
    </ol>

    <p>
      This is all early. If you have suggestions for different questions, how this approach of project can be improved, or what not,


      please send a note.
    </p>

  </Layout>
);

export default SharePage;