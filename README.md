<img src = "views/screenshot.png"> </img>
# Portfolio
<p>A unique portfolio website with a contact form and an easy-to-use file structure for you to work upon.</p>
<p>
	Aimed towards promoting a simple yet effective paradigm, this portfolio features seperation of concerns following the MVC approach and uses only vanilla JS and PHP. The code follows a singleton pattern with proper dependency injection.  
  
  The backend features separate models and controllers for contact form interaction and page visit tracking, ensuring structured code organization and efficient handling of user interactions and analytics.

  For messages, I personally have a secure automated pipeline that emails me the contents of the <i>messages</i> table with Crontab, I may create a repository and documentation for this aspect of my personal stack in the future.
</p>
<p><a href="https://www.kevinsiraki.com/"> Demo</a><p>
<h3>Structure</h3>
<ul>
  <li>contact/
   <ul>
    <li>Scalable Digital Contact Card</li>
	<li><img src = "views/screenshot2.png"> </img></li>
   </ul>
  </li>
  <li>api/
    <ul>
      <li>API Endpoints</li>
    </ul>
  </li>
  <li>model/
    <ul>
      <li>Business Logic</li>
    </ul>
  </li>
  <li>controller/
    <ul>
      <li>API Controllers</li>
    </ul>
  </li>
  <li>db/
    <ul>
      <li>Database Schema/Config</li>
    </ul>
  </li>
  <li>views/
    <ul>
      <li>css/
        <ul>
          <li>Global CSS Styles/Fonts</li>
        </ul>
      </li>
      <li>js/
        <ul>
          <li>JS Scripts</li>
        </ul>
      </li>
	  <li>components/
        <ul>
          <li>JS Components</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Entry/Root (resume.php)</li>
  <li>example.env</li>
</ul>
