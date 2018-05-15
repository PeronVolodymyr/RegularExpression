import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {

    public static void main(String[] args) {
        //ip address
        String regexForIpAddress ="(([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\\.){3}" +
                "([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])";
        //port = number between 0 and 65535
        String regexForPort = "([0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])";

        String regexForHost = "(([a-z0-9]{2,30}\\.)" +
                "(com|com\\.ua|net|ru)" +
                "(:"+regexForPort+")?)";

        String regexForName = "^[a-zA-Z]+$";

        String regexForEmail = "^([a-zA-Z0-9_\\.]{2,30}@)([a-z]+\\.(com|ua|ru))$";

        String regexForSocket = "("+regexForIpAddress+":"+regexForPort+")|(localhost:"+regexForPort+")";
        Pattern pattern = Pattern.compile(regexForHost);
        Matcher matcher = pattern.matcher("ad7ds.com:8080");
//        Matcher matcher = pattern.matcher("127.0.0.1");
//        Matcher matcher = pattern.matcher("Volodymyr");
//        Matcher matcher = pattern.matcher("perwolod@gmail.com");
//        Matcher matcher = pattern.matcher("localhost:8080");
        System.out.println(matcher.matches());
    }
}
