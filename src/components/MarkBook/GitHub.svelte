<script lang="ts">
	import axios from 'axios';
	import Paragraph from './Paragraph.svelte';

  export let url ;
	let avatarURL = 'https://avatars.githubusercontent.com/u/6154722?v=4';
	let owner = 'owner';
	let repository = 'repository';

	let description = '... Description';

  let contributors = 0
  let forks = 0
  let issues = 0
  let stars = 0;

	(async function () {
    console.clear()
		const { data } = await axios.get(`https://api.github.com/repos/${url}?anon=false`);
		avatarURL = data.owner.avatar_url;
		[owner,repository] = [data.owner.login,data.name]
		description = data.description;

    forks = data.forks;
    issues = data.open_issues_count;
    stars = data.stargazers_count


		const res = await axios.get(data.contributors_url+"?per_page=1&anon=true");
    contributors = parseInt(res.headers.link.match(/page=([0-9]+)>; rel="last"/)[1]);
    

	})();

  const format = new Intl.NumberFormat('en-US',{
    maximumFractionDigits:1,
    notation:"compact"
  }).format;
</script>

<div class="bg-white dark:bg-[#1a2233] p-5 rounded-xl shadow-md">
  <div class="flex items-center pb-3 justify-between">
    <div class="flex items-center gap-2">
      <img class="w-6" src={avatarURL} alt="" />
      <div class="flex hover:underline cursor-pointer">
        <h3 class="text-2xl text-[#2f3a3c] dark:text-[#c3ced0]">{owner}/</h3>
        <h2 class="text-2xl text-[#2f3a3c] dark:text-[#c3ced0] font-bold">{repository}</h2>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="22" height="22">
      <path class="fill-white" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
    </svg>
  </div>
  <Paragraph text={description}/>
  <div class="flex justify-between pt-4">
    <!-- details -->
    <div class="flex gap-x-10 gap-y-3  flex-wrap">
      <div class="flex flex-col">
        <div class="flex gap-2 text-[#35373b] dark:text-[hsl(220,5%,78%)] font-bold items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path class="fill-[#6b7075] dark:fill-[hsl(210,4%,44%)]" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
          </svg>
          {contributors}
        </div>
        <p class="hidden sm:block text-[#757678] dark:text-[hsl(220,1%,54%)] text-sm pl-5">Contributors</p>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-2 text-[#35373b] dark:text-[hsl(220,5%,78%)] font-bold items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path class="fill-[#6b7075] dark:fill-[#6c7075]" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path class="fill-[#6b7075] dark:fill-[#6c7075]" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
          {format(issues)}
        </div>
        <p class="hidden sm:block text-[#757678] dark:text-[hsl(220,1%,54%)] text-sm pl-5">Issues</p>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-2 text-[#35373b] dark:text-[hsl(220,5%,78%)] font-bold items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path class="fill-[#6b7075] dark:fill-[#6c7075]" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>
          {format(stars)}
        </div>
        <p class="hidden sm:block text-[#757678] dark:text-[hsl(220,1%,54%)] text-sm pl-5">Stars</p>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-2 text-[#35373b] dark:text-[hsl(220,5%,78%)] font-bold items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path class="fill-[#6b7075] dark:fill-[#6c7075]" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
          </svg>
          {format(forks)}
        </div>
        <p class="hidden sm:block text-[#757678] dark:text-[hsl(220,1%,54%)] text-sm pl-5">Forks</p>
      </div>
    </div>
    <!-- /details -->
   
  </div>
  
</div>


<style>
</style>
