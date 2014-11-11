#pragma strict

var blackBox : GameObject;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Q))
	{
		Instantiate(blackBox, Vector2(2,3), Quaternion.identity);
	}
}