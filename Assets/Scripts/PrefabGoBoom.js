#pragma strict

function Start () {

}

function Update ()
{
	transform.position.x -= 1 * Time.deltaTime;
	transform.position.y += 2 * Time.deltaTime;
	if(transform.position.y >= 10)
		{
		Destroy(gameObject);
		}
}