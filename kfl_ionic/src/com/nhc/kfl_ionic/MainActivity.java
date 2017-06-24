package com.nhc.kfl_ionic;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		WebView wv=new WebView(getApplicationContext());
		wv.getSettings().setJavaScriptEnabled(true);
		setContentView(R.layout.activity_main);
		wv.loadUrl("http://176.18.5.4/kfl_ionic/kaifanla.html");
		setContentView(wv);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
