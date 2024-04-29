# 정규표현식(REgExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성
```js
// 생성자
new RegExp('표현', '옵션')
mew RegExp('[a-z]', 'gi')

// 리터럴(''(따옴표 없이 작성))
/표현/옵션
/[a-z]/gi

```

## 예제문자
```js
const str = `
010-1234-5678
flower@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick browm fox jumps over the lazy dog.
abbccddd
`
```

## 메소드
메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean)반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환

## 플래그

플래그 | 설명
-- | --
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(insensitive ignore case)
m | 여러 줄 일치(multi line)

## 패턴(표현)

패턴 | 설명
-- | --
^ab | 줄(ㅣine) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3(숫자)개 연속 일치
{3,} | 3(숫자)개 이상 연속 일치
{3,5} | 3(숫자)개 이상 5(숫자)개 이하(3~5) 연속 일치
[abc] | a 또는 b 또는 c와 일치, 점(.)이나 별표(*) 같은 특수 문자는 []안에서 특수 문자가 아님
[a-z] | 영어 소문자
[A-Z] | 영어 대문자
[0-9] | 숫자
[가-힣] | 한글
\w | 63개의 문자(Word, 대소영문 52개 + 숫자 10 + _)
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)-특수기호
\d | 숫자(Digit)
\s | 공백(Space, Tab 등)
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)