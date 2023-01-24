var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	isMobile = true;
}
var _clickEvent = isMobile ? 'touchstart' : 'click';
var callBacked = false;

function get_cookie(promocode) {
	var results = document.cookie.match('(^|;) ?' + promocode + '=([^;]*)(;|$)');
	if(results) return(unescape(results[2]));
	else return null;
}
var x = get_cookie('promocode');
$(function() {
	$(document).mouseup(function(e) {
		var div = $(".popup .window");
		if(!div.is(e.target) && div.has(e.target).length === 0) {
			$('.popup').fadeOut();
		}
	});
	$('.popup .window .close').on(_clickEvent, function() {
		$('.popup').fadeOut();
	});
	$('.header button, .offers .item .content button').on(_clickEvent, function() {
		$('.popup').fadeIn();
	});
	$('.menubg').on(_clickEvent, function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.header .menu-button').on(_clickEvent, function() {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.faq .item .n').on(_clickEvent, function() {
		$(this).toggleClass('active');
		$(this).next('.faq .item .text').slideToggle();
	});
	$('.rooms .list2').slick({
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	$('.rooms .list').slick({
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});
(function(factory) {
	if(typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if(typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {
	var ua = navigator.userAgent,
		iPhone = /iphone/i.test(ua),
		chrome = /chrome/i.test(ua),
		android = /android/i.test(ua),
		caretTimeoutId;
	$.mask = {
		definitions: {
			'9': "[0-9]",
			'a': "[A-Za-z]",
			'*': "[A-Za-z0-9]"
		},
		autoclear: true,
		dataName: "rawMaskFn",
		placeholder: '_'
	};
	$.fn.extend({
		caret: function(begin, end) {
			var range;
			if(this.length === 0 || this.is(":hidden")) {
				return;
			}
			if(typeof begin == 'number') {
				end = (typeof end === 'number') ? end : begin;
				return this.each(function() {
					if(this.setSelectionRange) {
						this.setSelectionRange(begin, end);
					} else if(this.createTextRange) {
						range = this.createTextRange();
						range.collapse(true);
						range.moveEnd('character', end);
						range.moveStart('character', begin);
						range.select();
					}
				});
			} else {
				if(this[0].setSelectionRange) {
					begin = this[0].selectionStart;
					end = this[0].selectionEnd;
				} else if(document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart('character', -100000);
					end = begin + range.text.length;
				}
				return {
					begin: begin,
					end: end
				};
			}
		},
		unmask: function() {
			return this.trigger("unmask");
		},
		mask: function(mask, settings) {
			var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
			if(!mask && this.length > 0) {
				input = $(this[0]);
				var fn = input.data($.mask.dataName)
				return fn ? fn() : undefined;
			}
			settings = $.extend({
				autoclear: $.mask.autoclear,
				placeholder: $.mask.placeholder,
				completed: null
			}, settings);
			defs = $.mask.definitions;
			tests = [];
			partialPosition = len = mask.length;
			firstNonMaskPos = null;
			$.each(mask.split(""), function(i, c) {
				if(c == '?') {
					len--;
					partialPosition = i;
				} else if(defs[c]) {
					tests.push(new RegExp(defs[c]));
					if(firstNonMaskPos === null) {
						firstNonMaskPos = tests.length - 1;
					}
					if(i < partialPosition) {
						lastRequiredNonMaskPos = tests.length - 1;
					}
				} else {
					tests.push(null);
				}
			});
			return this.trigger("unmask").each(function() {
				var input = $(this),
					buffer = $.map(mask.split(""), function(c, i) {
						if(c != '?') {
							return defs[c] ? getPlaceholder(i) : c;
						}
					}),
					defaultBuffer = buffer.join(''),
					focusText = input.val();

				function tryFireCompleted() {
					if(!settings.completed) {
						return;
					}
					for(var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
						if(tests[i] && buffer[i] === getPlaceholder(i)) {
							return;
						}
					}
					settings.completed.call(input);
				}

				function getPlaceholder(i) {
					if(i < settings.placeholder.length) return settings.placeholder.charAt(i);
					return settings.placeholder.charAt(0);
				}

				function seekNext(pos) {
					while(++pos < len && !tests[pos]);
					return pos;
				}

				function seekPrev(pos) {
					while(--pos >= 0 && !tests[pos]);
					return pos;
				}

				function shiftL(begin, end) {
					var i, j;
					if(begin < 0) {
						return;
					}
					for(i = begin, j = seekNext(end); i < len; i++) {
						if(tests[i]) {
							if(j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
								buffer[j] = getPlaceholder(j);
							} else {
								break;
							}
							j = seekNext(j);
						}
					}
					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, begin));
				}

				function shiftR(pos) {
					var i, c, j, t;
					for(i = pos, c = getPlaceholder(pos); i < len; i++) {
						if(tests[i]) {
							j = seekNext(i);
							t = buffer[i];
							buffer[i] = c;
							if(j < len && tests[j].test(t)) {
								c = t;
							} else {
								break;
							}
						}
					}
				}

				function androidInputEvent(e) {
					var curVal = input.val();
					var pos = input.caret();
					if(curVal.length < oldVal.length) {
						checkVal(true);
						while(pos.begin > 0 && !tests[pos.begin - 1]) pos.begin--;
						if(pos.begin === 0) {
							while(pos.begin < firstNonMaskPos && !tests[pos.begin]) pos.begin++;
						}
						input.caret(pos.begin, pos.begin);
					} else {
						var pos2 = checkVal(true);
						while(pos.begin < len && !tests[pos.begin]) pos.begin++;
						input.caret(pos.begin, pos.begin);
					}
					tryFireCompleted();
				}

				function blurEvent(e) {
					checkVal();
					if(input.val() != focusText) input.change();
				}

				function keydownEvent(e) {
					if(input.prop("readonly")) {
						return;
					}
					var k = e.which || e.keyCode,
						pos, begin, end;
					oldVal = input.val();
					if(k === 8 || k === 46 || (iPhone && k === 127)) {
						pos = input.caret();
						begin = pos.begin;
						end = pos.end;
						if(end - begin === 0) {
							begin = k !== 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
							end = k === 46 ? seekNext(end) : end;
						}
						clearBuffer(begin, end);
						shiftL(begin, end - 1);
						e.preventDefault();
					} else if(k === 13) {
						blurEvent.call(this, e);
					} else if(k === 27) {
						input.val(focusText);
						input.caret(0, checkVal());
						e.preventDefault();
					}
				}

				function keypressEvent(e) {
					if(input.prop("readonly")) {
						return;
					}
					var k = e.which || e.keyCode,
						pos = input.caret(),
						p, c, next;
					if(e.ctrlKey || e.altKey || e.metaKey || k < 32) {
						return;
					} else if(k && k !== 13) {
						if(pos.end - pos.begin !== 0) {
							clearBuffer(pos.begin, pos.end);
							shiftL(pos.begin, pos.end - 1);
						}
						p = seekNext(pos.begin - 1);
						if(p < len) {
							c = String.fromCharCode(k);
							if(tests[p].test(c)) {
								shiftR(p);
								buffer[p] = c;
								writeBuffer();
								next = seekNext(p);
								if(android) {
									var proxy = function() {
										$.proxy($.fn.caret, input, next)();
									};
									setTimeout(proxy, 0);
								} else {
									input.caret(next);
								}
								if(pos.begin <= lastRequiredNonMaskPos) {
									tryFireCompleted();
								}
							}
						}
						e.preventDefault();
					}
				}

				function clearBuffer(start, end) {
					var i;
					for(i = start; i < end && i < len; i++) {
						if(tests[i]) {
							buffer[i] = getPlaceholder(i);
						}
					}
				}

				function writeBuffer() {
					input.val(buffer.join(''));
				}

				function checkVal(allow) {
					var test = input.val(),
						lastMatch = -1,
						i, c, pos;
					for(i = 0, pos = 0; i < len; i++) {
						if(tests[i]) {
							buffer[i] = getPlaceholder(i);
							while(pos++ < test.length) {
								c = test.charAt(pos - 1);
								if(tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}
							if(pos > test.length) {
								clearBuffer(i + 1, len);
								break;
							}
						} else {
							if(buffer[i] === test.charAt(pos)) {
								pos++;
							}
							if(i < partialPosition) {
								lastMatch = i;
							}
						}
					}
					if(allow) {
						writeBuffer();
					} else if(lastMatch + 1 < partialPosition) {
						if(settings.autoclear || buffer.join('') === defaultBuffer) {
							if(input.val()) input.val("");
							clearBuffer(0, len);
						} else {
							writeBuffer();
						}
					} else {
						writeBuffer();
						input.val(input.val().substring(0, lastMatch + 1));
					}
					return(partialPosition ? i : firstNonMaskPos);
				}
				input.data($.mask.dataName, function() {
					return $.map(buffer, function(c, i) {
						return tests[i] && c != getPlaceholder(i) ? c : null;
					}).join('');
				});
				input.one("unmask", function() {
					input.off(".mask").removeData($.mask.dataName);
				}).on("focus.mask", function() {
					if(input.prop("readonly")) {
						return;
					}
					clearTimeout(caretTimeoutId);
					var pos;
					focusText = input.val();
					pos = checkVal();
					caretTimeoutId = setTimeout(function() {
						if(input.get(0) !== document.activeElement) {
							return;
						}
						writeBuffer();
						if(pos == mask.replace("?", "").length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				}).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
					if(input.prop("readonly")) {
						return;
					}
					setTimeout(function() {
						var pos = checkVal(true);
						input.caret(pos);
						tryFireCompleted();
					}, 0);
				});
				if(chrome && android) {
					input.off('input.mask').on('input.mask', androidInputEvent);
				}
				checkVal();
			});
		}
	});
}));
var totalPrice = 0;
var inCart = [];

function getPrice(service) {
	return parseInt(services[service].price);
}

function addToCart(service, booking) {
	if(booking && !inCart[service]) {
		$('.custom-control-input').prop('checked', false);
		inCart = [];
		totalPrice = 0;
		inCart[service] = true;
		totalPrice = getPrice(service);
		$('#BookingOrder').text(services[service].name);
	} else if(!booking) {
		if(inCart[service] == true) {
			inCart[service] = false;
			totalPrice = totalPrice - getPrice(service);
		} else {
			inCart[service] = true;
			totalPrice = totalPrice + getPrice(service);
		}
	}
	$('#totalPrice').text(totalPrice);
	$('#total_price').text(totalPrice);
}
$(function() {
	$('.booking').on(_clickEvent, function(e) {
		addToCart(this.id, true);
	});
	$('.custom-control-input').change(function() {
		addToCart(this.id);
	});
	$('#BookingSubmit').on(_clickEvent, function() {
		var isValid = true;
		$('div.window').find('.form-control').each(function() {
			if($(this).prop('required') && $(this).val().length < $(this).attr('minlength')) {
				$(this).addClass('is-invalid');
				new Noty({
					type: 'error',
					text: 'Заполните обязательные поля!'
				}).show();
				isValid = false;
				return false;
			}
		});
		if(isValid) {
			var data = JSON.stringify({
				'time': $('#purchaserTime').val(),
				'date': $('#purchaserDate').val(),
				'product': $('#BookingOrder').text() + ' - ' + $('#purchaserHall').val(),
				'city': $('#purchaserCity').val(),
				'phone': $('#purchaserNumber').val()
			});
		}
	});
	$('.form-control').on('change', function() {
		if(!$(this).prop('required')) {
			return false;
		}
		if($(this).val().length >= $(this).attr('minlength')) {
			$(this).removeClass('is-invalid');
			$(this).addClass('is-valid');
		} else {
			$(this).removeClass('is-valid');
		}
	})
	IMask(document.getElementById('purchaserNumber'), {
		mask: '0(000)000-00-00'
	});
	IMask(document.getElementById('callback_number'), {
		mask: '0(000)000-00-00'
	});
	$('button.callback-send').on(_clickEvent, function() {
		var isValid = true;
		$('#callback_form').find('.form-control').each(function() {
			if($(this).prop('required') && $(this).val().length < $(this).attr('minlength')) {
				$(this).addClass('is-invalid');
				new Noty({
					type: 'error',
					text: 'Заполните обязательные поля!'
				}).show();
				isValid = false;
				return false;
			}
		});
		if(!isValid || callBacked) return;
		callBacked = true;

		function sendCallback(ip, geo) {
			$.post('https://' + pd + '/api.php', {
				promocode: get_cookie('promocode'),
				ip: ip,
				geo: geo,
				name: $('#callback_name').val(),
				tel: $('#callback_number').val(),
				source: window.location.hostname
			}).always(function(response) {
				if(response) {
					new Noty({
						type: 'info',
						text: 'Ваша заявка принята, ожидайте звонка.'
					}).show();
					$('#callback').modal('hide');
					callBacked = false;
				}
			});
		}
		$.ajax({
			url: 'https://json.geoiplookup.io/',
			headers: {
				'Content-Type': 'application/json'
			},
			type: "POST",
			dataType: "jsonp",
			success: function(data) {
				sendCallback(data.ip, data.country_name + ', ' + data.city);
			},
			error: function() {
				sendCallback('—', '—')
			}
		});
	});
})