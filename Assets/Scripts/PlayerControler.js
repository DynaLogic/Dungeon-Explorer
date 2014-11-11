#pragma strict

var playerAnim : Animator;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.A))
	{
		playerAnim.SetTrigger("Running");
		transform.Translate(Vector2.right * Time.deltaTime);
		
	}
	if(Input.GetKeyUp(KeyCode.A))
	{
		playerAnim.SetTrigger("Idle");
	}
}